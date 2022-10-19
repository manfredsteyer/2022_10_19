import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[clickWithWarning]'
})
export class ClickWithWarningDirective {
  @Input() warning = 'Are you sure?!';

  @Output('clickWithWarning') onClick = new EventEmitter<void>();

  @HostBinding('class')
  clazz = 'btn btn-danger';

  @HostListener('click', ['$event'])
  clicked(event: MouseEvent): void {
    if (event.shiftKey || confirm(this.warning)) {
      this.onClick.emit();
    }
  }

  constructor() {}
}
