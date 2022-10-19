import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-tab-navigator',
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.scss']
})
export class TabNavigatorComponent {
  // implements OnInit

  @Input() page = 0;
  @Input() pageCount = 0;

  @Output() pageChange = new EventEmitter<number>();

  constructor(private nav: NavService) {}

  next(): void {
    this.page++;
    if (this.page > this.pageCount) {
      this.page = 1;
    }
    this.pageChange.emit(this.page);

    this.nav.page.next(this.page);
  }

  prev(): void {
    this.page--;
    if (this.page <= 0) {
      this.page = this.pageCount;
    }
    this.pageChange.emit(this.page);

    this.nav.page.next(this.page);
  }

  // constructor() {}

  // ngOnInit(): void {}
}
