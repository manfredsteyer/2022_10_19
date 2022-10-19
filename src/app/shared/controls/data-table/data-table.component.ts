import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { TableFieldDirective } from './table-field.directive';

/*


 <app-data-table [data]="flights">
     <div *appTableField="let data as 'id'">{{data}}</div>
     <div *appTableField="let data as 'from'">{{data}}</div>
     <div *appTableField="let data as 'to'">{{data}}</div>
     <div *appTableField="let data as 'date'">{{data | date:'dd.MM.yyyy HH:mm'}}</div>
   </app-data-table>

*/

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() data: Array<any> = [];

  @ContentChildren(TableFieldDirective)
  fields: QueryList<TableFieldDirective> | undefined;

  get fieldList() {
    return this.fields?.toArray();
  }
}
