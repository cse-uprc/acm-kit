import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../assets/globals';

/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  /**
   * Logs a user in and generates a JWT token for that user
   *
   * @param username - username of the user
   * @param password - password for the user
   */
  authenticate(username: string, password: string) {
    this.http
      .post(Environment.AUTH, { username, password })
      .subscribe((response) => console.log((response as any).token));
  }
}
