import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {

  }

  login() {
    this.router.navigate(['/login']);
  }
  registro() {
    this.router.navigate(['/registro']);
  }



}
