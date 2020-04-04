import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../modules/authentication/guards/auth.guard';
import { MainLayoutComponent } from './pages/main/main.layout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        canActivate: [AuthGuard],
        component: MainLayoutComponent,
        children: [
          {
            path: 'dashboard',
            loadChildren: () =>
              import('../modules/dashboard/dashboard.module').then(
                (mod) => mod.DashboardModule
              )
          },
          {
            path: 'product',
            loadChildren: () =>
              import('../modules/product/product.module').then(
                (mod) => mod.ProductModule
              )
          },
          { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
