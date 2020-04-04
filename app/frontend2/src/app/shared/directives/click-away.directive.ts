import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appClickAway]'
})
export class ClickAwayDirective {
  constructor(private el: ElementRef) {}

  @Output()
  public appClickAway = new EventEmitter<void>();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.appClickAway.emit();
    }
  }
}
