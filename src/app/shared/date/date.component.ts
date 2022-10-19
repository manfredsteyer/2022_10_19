import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

type OnChange = (value: string) => void;
type OnTouch = () => void;

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements ControlValueAccessor {
  // @Input() date: string | null = null;
  // @Output() dateChange = new EventEmitter<string>();

  day: number | null = null;
  month: number | null = null;
  year: number | null = null;
  hour: number | null = null;
  minute: number | null = null;

  constructor(control: NgControl) {
    control.valueAccessor = this;
  }

  writeValue(obj: string): void {
    if (!obj) {
      return;
    }

    const date = new Date(obj);
    this.day = date.getDate();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: OnChange = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch: OnTouch = () => {};

  registerOnChange(fn: OnChange): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: OnTouch): void {
    this.onTouch = fn;
  }

  apply() {
    if (!this.year || !this.month || !this.day || !this.hour || !this.minute) {
      return;
    }

    const date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);
    this.onChange(date.toISOString());
  }
}
