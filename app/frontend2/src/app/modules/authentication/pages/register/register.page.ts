import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  constructor(private authenticationService: AuthenticationService) {}

  public onSubmit(payload: any): void {
    const { email, password } = payload;
    this.authenticationService.register(email, password);
  }
}
