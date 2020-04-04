import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  public async login(email: string, password: string): Promise<boolean> {
    const token: any = (await this.httpClient
      .post(`${environment.API_URL}/auth/login`, {
        email,
        password
      })
      .toPromise()) as any;

    localStorage.setItem(environment.TOKEN_STORAGE_KEY, JSON.stringify(token));

    return this.router.navigateByUrl('/app');
  }

  public async logout() {
    localStorage.removeItem(environment.TOKEN_STORAGE_KEY);
    return this.router.navigateByUrl('/auth/login');
  }

  public async register(email: string, password: string): Promise<boolean> {
    await this.httpClient
      .post(`${environment.API_URL}/auth/sign-up`, {
        email,
        password
      })
      .toPromise();
    return this.login(email, password);
  }

  public async isAuthenticated(): Promise<boolean> {
    try {
      const response: any = await this.httpClient
        .get(`${environment.API_URL}/auth/validate-session`)
        .toPromise();

      return response && response.valid;
    } catch {}
    return false;
  }

  public getToken(): string {
    const { access_token } = JSON.parse(
      localStorage.getItem(environment.TOKEN_STORAGE_KEY)
    );
    return access_token;
  }

  /**
   * @TODO: Use a real user object
   */
  public getUser(): any {
    // const { access_token } = JSON.parse(
    //   localStorage.getItem(environment.TOKEN_STORAGE_KEY)
    // );
    // return access_token;

    return {
      email: 'asd@asd.asd'
    };
  }
}
