import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  constructor(private authenticationService: AuthenticationService) {}

  public onSubmit(payload: any): void {
    const { email, password } = payload;
    this.authenticationService.login(email, password);
  }
}
