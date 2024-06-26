import { Injectable } from '@angular/core';
import { Observable, from, of, interval } from 'rxjs';
import { delay, filter, mapTo, mergeMap, switchMap, take, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TiempoService {
  private inactivityThreshold: number = 300000; // 5 minutos en milisegundos
  private inactivity$ = new Observable<number>();


  constructor() { }

  public startMonitoring() {
    const activity$ = from([document.onmousemove, document.onkeydown, document.ontouchmove])
      .pipe(mergeMap(() => of(0)));

    this.inactivity$ = interval(1000)
      .pipe(
        switchMap(() => activity$),
        takeUntil(this.inactivityThresholdExceeded())
      );
  }

  public inactivityThresholdExceeded(): Observable<boolean> {
    return this.inactivity$.pipe(
      filter(value => value === 0),
      delay(this.inactivityThreshold),
      take(1),
      mapTo(true)
    );
  }

  public setInactivityThreshold(seconds: number): void {
    this.inactivityThreshold = seconds * 1000;
  }
}
