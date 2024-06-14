import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  time!: Observable<string>;

  ngOnInit() {
    this.time = interval(1000).pipe(
      map(() => new Date().toLocaleString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      })))
    }
}
