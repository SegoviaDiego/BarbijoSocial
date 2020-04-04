import {
  animate,
  animateChild,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Menu } from '../../../shared/classes/menu';
import { mainMenu } from '../../../shared/menus/main.menu';

@Component({
  selector: 'app-mobile-sidebar-layout',
  templateUrl: './mobile-sidebar.layout.component.html',
  styleUrls: ['./mobile-sidebar.layout.component.scss'],
  animations: [
    trigger('mobileSidebarSlideInOut', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      transition('* => void', [
        style({ transform: 'translateX(0)' }),
        animate(200, style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('mobileSidebarShowInOut', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('200ms ease-in-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('waitForChildrenAnimations', [
      transition('* => void', [
        query('@*', [animateChild()], { optional: true })
      ])
    ])
  ]
})
export class MobileSidebarLayoutComponent {
  @Input()
  public isSidebarOpen = false;

  @Output()
  public onClose = new EventEmitter<void>();

  public menu: Menu;

  constructor() {
    this.menu = mainMenu;
  }

  public onCloseSidebar() {
    return this.onClose.emit();
  }
}
