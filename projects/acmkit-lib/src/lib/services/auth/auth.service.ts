import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../assets/globals';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    this.http
      .post(Environment.AUTH, { username, password })
      .subscribe((response) => console.log((response as any).token));
  }
}
