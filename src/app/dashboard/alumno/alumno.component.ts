import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface Materia {
  value: string;
  viewValue: string;
}
interface dia {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule, MatTableModule, MatCheckboxModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent implements OnInit {
  materias: any[] = [];
  dataSource: any[] = [];
  horas: any[] = [];
  protected cantidad: number = 0;



  constructor(
    private router: Router,
    private titulo: Title,
    private http: HttpService,

  ) {
    titulo.setTitle('Alumno');
  }
  ngOnInit() {
    this.LovHoras();
    this.MateriasDisponibles();
    this.getHorarios();

  }
  LisMaterias(id_materia: any) {
    this.http.LisMaterias(id_materia).subscribe((resp: any) => {
      this.materias = resp;
    })
  }

  addMateria(elem: any) {
    this.http.MateriaAlumno(elem.id_materia, localStorage.getItem('id_usuario'), elem.id_maestro).subscribe((resp: any) => {
      let idsResp = resp.ids;
      this.filtrar();
      console.log(this.materias);
      Swal.fire({
        title: resp.messages,
        icon: 'info',
        showConfirmButton: false,
        timer: 1500
      });

      this.getHorarios();
    });
  }
  filtrar() {
    console.log('entro');
    this.http.getIdsMaterias(localStorage.getItem('id_usuario')).subscribe((data: any) => {
      this.cantidad = data.length;;
      data.forEach((idcancel: any) => {
        let itemsNew: any[] = [];
        this.materias.forEach((item: any) => {
          if (item.id_materia != idcancel.id_materia) {
            itemsNew.push(item);
          }
        });
        this.materias = itemsNew;
      });
    });
  }



  getHorarios() {
    this.http.getHorarios(localStorage.getItem('id_usuario')).subscribe((data: any) => {
      this.dataSource = data; // Asigna los datos recibidos a dataSource
    }, error => {
      console.error('Error al obtener Horio:', error);
    });
  }
  viewmateria(dia: any, horario: any): string {
    if (this.dataSource.length > 0) {
      let value: string = '';
      this.dataSource.forEach((item: any) => {
        if (item.Dia == dia && item.inicio == horario) {
          value = item.Materia;
        }
        else if (item.inicio <= horario && item.fin == horario && item.Dia == dia) {
          value = item.Materia;
        }
      });
      return value;
    }
    else
      return '';
  }

  LovHoras() {
    this.http.LovHoras().subscribe((data: any) => {
      console.log(data);
      this.horas = data;
    }, error => {
      console.error('Error:', error);
    });
  }

  MateriasDisponibles() {
    this.http.MostrarMaestros().subscribe((data: any) => {
      this.materias = data;
      this.filtrar();
    }, error => {
      console.error('Error:', error);
    })
  }


}
