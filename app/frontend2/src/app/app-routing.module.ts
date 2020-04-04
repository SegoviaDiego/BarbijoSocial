import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/authentication/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'app',
    loadChildren: () =>
      import('./layout/layout.module').then((mod) => mod.LayoutModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      )
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
