import { TemplateBindingParseResult } from '@angular/compiler';
import { Directive, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type OnChange = (value: string) => void;
type OnTouch = () => void;

@Directive({
  selector: '[appDate]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateDirective,
      multi: true
    }
  ]
})
export class DateDirective implements ControlValueAccessor {
  constructor() {}

  @HostListener('input', ['$event'])
  input(event: any) {
    let value = event.target.value as string;

    if (value) {
      const parts = value.split('.');
      const date = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
      value = date.toISOString();
    }

    // Parse!
    this.onChange(value);
  }

  @HostListener('focus', ['$event'])
  focus(event: any) {
    this.onTouch();
  }

  @HostBinding('value')
  value: string | undefined;

  onChange: OnChange = () => {};
  onTouch: OnTouch = () => {};

  registerOnChange(fn: OnChange): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: OnTouch): void {
    this.onTouch = fn;
  }

  writeValue(obj: any): void {
    // TODO: Format

    const date = new Date(obj);
    this.value = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }
}
