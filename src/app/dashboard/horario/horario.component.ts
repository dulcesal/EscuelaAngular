import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-horario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule, MatTableModule],
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.css'
})
export class HorarioComponent implements OnInit {

  dataSource: any[] = [];
  displayedColumns: string[] = ['Materia', 'Maestro', 'Dia', 'Hora_Inicio', 'Hora_Fin'];

  ngOnInit() {

  }

  constructor(
    private router: Router,
    private titulo: Title,
    private http: HttpService,
    private dialog: MatDialog
  ) {
    titulo.setTitle('Horario');
  }





}
