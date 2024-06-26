import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TiempoService } from './services/tiempo.service'
import { Observable, interval, switchMap, takeUntil, timer } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Escuela';
  protected reserv: any = new Observable<number>();



  constructor(
    private inactivityService: TiempoService,
    private router: Router,
  ) {


  }

  ngOnInit() {
    this.inactivityService.startMonitoring();
    this.reserv = timer(300000);
    this.inactivityService.inactivityThresholdExceeded().subscribe(() => {
      Swal.fire({
        title: 'Usuario No Utilizado',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('/login');
    });

  }

}





