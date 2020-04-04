import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { DashboardRoutingModule } from './dashboard.routing.module';

@NgModule({
  declarations: [DashboardPage],
  imports: [CommonModule, DashboardRoutingModule],
  providers: []
})
export class DashboardModule {}
