import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'sign-up', component: RegisterPage },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
