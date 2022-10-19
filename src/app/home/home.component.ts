import { Component } from '@angular/core';
import { Flight } from '../flight-booking/flight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  flights: Flight[] = [
    { id: 1, from: 'Berlin', to: 'Munich', date: '2022-10-19T17:00' },
    { id: 2, from: 'Munich', to: 'Berlin', date: '2022-10-19T17:30' },
    { id: 3, from: 'Berlin', to: 'Hamburg', date: '2022-10-19T17:45' }
  ];

  date = new Date().toISOString();

  deleteAll(): void {
    console.error('This would delete everything if this was not a cheap share ware version!');
  }
}
