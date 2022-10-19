// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { FormsModule } from '@angular/forms';

// Von der CLI eingefügt
import { CityValidationDirective } from './validation/city-validation.directive';
import { TabComponent } from './tab/tab.component';
import { TabbedPaneComponent } from './tabbed-pane/tabbed-pane.component';
import { TabNavigatorComponent } from './tab-navigator/tab-navigator.component';
import { BadComponent } from './bad/bad.component';
import { ClickWithWarningDirective } from './click-with-warning.directive';
import { TooltipDirective } from './tooltip.directive';
import { TableFieldDirective } from './controls/data-table/table-field.directive';
import { DataTableComponent } from './controls/data-table/data-table.component';
import { DateDirective } from './date.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,

    // Von der CLI eingefügt
    CityValidationDirective,
    TabComponent,
    TabbedPaneComponent,
    TabNavigatorComponent,
    BadComponent,
    ClickWithWarningDirective,
    TooltipDirective,
    TableFieldDirective,
    DataTableComponent,
    DateDirective
  ],
  exports: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    FormsModule,
    CommonModule,
    BadComponent,

    // Neue Einträge
    CityValidationDirective,
    TabComponent,
    TabbedPaneComponent,
    TabNavigatorComponent,
    ClickWithWarningDirective,
    TooltipDirective,
    TableFieldDirective,
    DataTableComponent,
    DateDirective
  ]
})
export class SharedModule {}
