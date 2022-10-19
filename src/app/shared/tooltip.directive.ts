import { Directive, ElementRef, EmbeddedViewRef, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {
  @Input('appTooltip') template!: TemplateRef<{ helpLink: string; $implicit: string }>;

  private viewRef!: EmbeddedViewRef<unknown>;

  constructor(private element: ElementRef, private viewContainer: ViewContainerRef) {}

  @HostListener('mouseover')
  mouseOver(): void {
    this.show();
  }

  @HostListener('mouseout')
  mouseOut(): void {
    this.hide();
  }

  async ngOnInit() {
    this.viewRef = this.viewContainer.createEmbeddedView(this.template, {
      helpLink: 'http://www.google.com',
      $implicit: 'Wichtiger Tooltiptext!'
    });

    const esm = await import('../tooltip/tooltip.component');
    const comp = esm.TooltipComponent;

    const compRef = this.viewContainer.createComponent(comp);
    compRef.setInput('title', 'My Title');
    // compRef.instance.title = 'My Title'
    // compRef.instance.m();
    // compRef.instance.myEvent.subscribe(e => ...)

    this.hide();
  }

  private show(): void {
    this.viewRef.rootNodes.forEach((elm) => (elm.hidden = false));
  }

  private hide(): void {
    this.viewRef.rootNodes.forEach((elm) => (elm.hidden = true));
  }
}
