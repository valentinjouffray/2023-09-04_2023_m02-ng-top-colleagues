import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);

  baseApiUrl = "https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2";
  private isLoggedIn: boolean = localStorage.getItem('token') !== null;

  login(pseudo: string, password: string) {
    return this.http.post(
      this.baseApiUrl + '/login',
      {
        pseudo: pseudo,
        password: password
      }
    );
  }

  checkIsLoggedIn(): boolean {
    this.isLoggedIn = localStorage.getItem('token') !== null;
    return this.isLoggedIn;
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }
}
