import { Component } from '@angular/core';
import { Menu } from '../../../shared/classes/menu';
import { mainMenu } from '../../../shared/menus/main.menu';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar.layout.component.html',
  styleUrls: ['./sidebar.layout.component.scss']
})
export class SidebarLayoutComponent {
  public menu: Menu;

  constructor() {
    this.menu = mainMenu;
  }
}
