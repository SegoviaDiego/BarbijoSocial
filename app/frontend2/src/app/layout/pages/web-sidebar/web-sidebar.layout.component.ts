import { Component } from '@angular/core';
import { Menu } from '../../../shared/classes/menu';
import { mainMenu } from '../../../shared/menus/main.menu';

@Component({
  selector: 'app-web-sidebar-layout',
  templateUrl: './web-sidebar.layout.component.html',
  styleUrls: ['./web-sidebar.layout.component.scss']
})
export class WebSidebarLayoutComponent {
  public menu: Menu;

  constructor() {
    this.menu = mainMenu;
  }
}
