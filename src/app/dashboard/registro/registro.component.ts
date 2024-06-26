import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { HttpService } from '../../services/http.service';
import Swal from 'sweetalert2';

interface Tipou {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule],  // Añade CommonModule aquí
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre: string = '';
  password: string = '';
  cbxTipoUsuario: string = '';  // Asegúrate de que este campo es del mismo tipo que los valores en `tipos`

  tipos: Tipou[] = [
    { value: '1', viewValue: 'Docente' },
    { value: '2', viewValue: 'Alumno' },
  ];

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() { }

  ingresas() {
    this.http.Registro(this.nombre, this.password, this.cbxTipoUsuario).subscribe((data: any) => {
      console.log(data);
      if (data.success == 1) {
        Swal.fire({
          title: '¡Puedes Ingresar!',
          icon: 'success',
          text: 'Ingresaste con exito',
          timer: 2000
        });
        this.router.navigate(['/login']);
      }
    },
      () => {
        alert('Error en el registro');
      }
    );
  }
  mostrar() {
    console.log(this.cbxTipoUsuario);
  }
}
