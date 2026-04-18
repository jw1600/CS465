import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/login`, { email, password });
  }

  public register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/register`, { name, email, password });
  }

  public saveToken(token: string): void {
    localStorage.setItem('travlr-token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('travlr-token');
  }

  public logout(): void {
    localStorage.removeItem('travlr-token');
  }

  public isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    }
    return false;
  }
}