import { Directive, Input, TemplateRef } from '@angular/core';

// <div *appTableField="let data as 'from'"> {{data}} </div>
//  [appTableFieldAs]="'from'"

@Directive({
  selector: '[appTableField]'
})
export class TableFieldDirective {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('appTableFieldAs') propName = '';

  constructor(public templateRef: TemplateRef<unknown>) {}
}
