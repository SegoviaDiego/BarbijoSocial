import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.layout.component.html',
  styleUrls: ['./main.layout.component.scss']
})
export class MainLayoutComponent {
  public isMobileSidebarOpen: boolean;

  constructor() {
    this.isMobileSidebarOpen = false;
  }

  public toggleSidebarEvent() {
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
  }

  public onMobileSidebarClose() {
    this.isMobileSidebarOpen = false;
  }
}
