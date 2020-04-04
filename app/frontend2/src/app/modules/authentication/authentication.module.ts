import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPage } from './pages/login/login.page';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPage } from './pages/register/register.page';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthenticationRoutingModule } from './authentication.routing.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [LoginPage, RegisterPage, SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],
  providers: [AuthenticationService, AuthGuard]
})
export class AuthenticationModule {}
