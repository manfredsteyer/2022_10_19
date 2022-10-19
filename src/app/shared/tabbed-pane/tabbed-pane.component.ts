import { AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChild } from '@angular/core';
import { NavService } from '../nav.service';
import { TabNavigatorComponent } from '../tab-navigator/tab-navigator.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss'],
  viewProviders: [NavService]
})
export class TabbedPaneComponent implements AfterContentInit, AfterViewInit {
  @ContentChildren('tab')
  tabList!: QueryList<TabComponent>;

  @ViewChild(TabNavigatorComponent)
  tabNavigator!: TabNavigatorComponent;

  // pageCount = 0;
  currentPage = 0;
  // tabs = new Array<TabComponent>();

  constructor(private nav: NavService) {
    console.debug(nav);
    this.nav.page.subscribe((page) => {
      this.change((page % this.tabs.length) + 1);
    });
  }

  get tabs() {
    return this.tabList.toArray();
  }

  // implements OnInit
  // constructor() { }
  // ngOnInit(): void {
  // }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0) {
      this.activate(this.tabs[0]);
    }
    // this.pageCount = this.tabs.length;
  }

  ngAfterViewInit(): void {
    this.tabNavigator.pageCount = this.tabs.length;
    this.tabNavigator.page = 1;

    this.tabNavigator.pageChange.subscribe((page) => {
      this.change(page);
    });
  }

  change(idx: number): void {
    const tab = this.tabs[idx - 1];
    this.activate(tab);
  }

  activate(tab: TabComponent) {
    for (const t of this.tabs) {
      t.visible = t === tab;
    }

    this.currentPage = this.tabs.findIndex((t) => t === tab) + 1;

    if (this.tabNavigator) {
      this.tabNavigator.page = this.currentPage;
    }
  }

  register(tab: TabComponent): void {
    this.tabs.push(tab);
  }
}
