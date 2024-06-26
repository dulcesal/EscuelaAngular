import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {
  }

  login() {
    this.http.Login(this.email, this.password).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('id_usuario', data.id);
      localStorage.setItem('id_tipousuario', data.tipo);
      if (data.tipo == 'maestro') {
        this.router.navigate(['/menu']);
      }
      else if (data.tipo == 'alumno') {
        this.router.navigate(['/alumno']);
      }
      else {
        Swal.fire({
          title: 'Usuario no existente',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }



}
