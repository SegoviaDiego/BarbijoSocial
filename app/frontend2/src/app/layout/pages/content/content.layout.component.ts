import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../shared/classes/menu-item';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content.layout.component.html',
  styleUrls: ['./content.layout.component.scss']
})
export class ContentLayoutComponent {
  @Input()
  public menuItem: MenuItem;
}
