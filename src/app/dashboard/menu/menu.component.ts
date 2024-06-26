import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Materia {
  value: string;
  viewValue: string;
}
interface dia {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule, MatTableModule, MatCheckboxModule, MatInputModule, MatSelectModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  materias: any[] = [];
  dataSource: any[] = [];
  horas: any[] = [];


  constructor(
    private titulo: Title,
    private http: HttpService,
  ) {
    titulo.setTitle('Docente');
  }
  ngOnInit() {

    this.LisMaterias(localStorage.getItem('id_usuario'));
    this.getMaestro();
    this.LovHoras();
  }


  LisMaterias(id_materia: any) {
    this.http.LisMaterias(id_materia).subscribe((resp: any) => {
      this.materias = resp;
    })
  }
  addMateria(id: any) {
    this.http.MateriaMaestro(id, localStorage.getItem('id_usuario')).subscribe((resp: any) => {
      let idsResp = resp.ids;
      idsResp.forEach((idcancel: any) => {
        let itemsNew: any[] = [];
        this.materias.forEach((item: any) => {
          if (item.id_materia != idcancel.id_materia) {
            itemsNew.push(item);
          }
        });
        this.materias = itemsNew;
      });
      Swal.fire({
        title: resp.messages,
        icon: 'info',
        showConfirmButton: false,
        timer: 1500
      });

      this.getMaestro();
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

  getMaestro() {
    this.http.getHorariosMaestro(localStorage.getItem('id_usuario')).subscribe((data: any) => {
      this.dataSource = data; // Asigna los datos recibidos a dataSource
    }, error => {
      console.error('Error al obtener Horio:', error);
    });
  }
  LovHoras() {
    this.http.LovHoras().subscribe((data: any) => {
      this.horas = data;
    }, error => {
      console.error('Error:', error);
    });
  }



}