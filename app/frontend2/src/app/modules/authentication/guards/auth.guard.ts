import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  async canActivate(): Promise<boolean> {
    if (await this.authenticationService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigateByUrl('auth/login');
      return false;
    }
  }
}
