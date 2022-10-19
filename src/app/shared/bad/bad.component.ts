import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-bad',
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.scss']
})
export class BadComponent {
  constructor(private nav: NavService) {
    let page = 1;
    setInterval(() => {
      nav.page.next(++page);
    }, 1000);
  }
}
