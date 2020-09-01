import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

export const TOKEN_NAME = 'token';

/**
 * JWT class to handle all the modifications of a users jwt token
 * and handling the storing and retrieval of the token.
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(private router: Router) {}

  /**
   * Get the current cached token
   *
   * @return String value of the token
   */
  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  /**
   * Sets the jwt token for the current active user
   *
   * @param token - the token to store in the local cache
   */
  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  /**
   * Get the expiration date of the currently stored token
   *
   * @return Tokens expiration date
   */
  getTokenExpirationDate(): Date {
    const exp = this.getDecodedToken().exp;

    if (exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(exp);
    return date;
  }

  /**
   * Checks to see if the users token is expired
   *
   * @return Boolean indicating if the token is expired
   */
  isTokenExpired(): boolean {
    const date = this.getTokenExpirationDate();
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  /**
   * Confirms that the users token is valid
   *
   * @return Boolean saying if the token is valid or not
   */
  isValidToken(): boolean {
    if (localStorage.getItem(TOKEN_NAME) != null) {
      if (this.isTokenExpired()) {
        localStorage.removeItem(TOKEN_NAME);
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  /**
   * Gets the decoded token object
   *
   * @return Object of the decoded token
   */
  getDecodedToken(): any {
    return jwt_decode(this.getToken());
  }

  /**
   * Get method to get a certain field from the users token
   *
   * @param field - The field we want to get from the token
   * @return the object the field contains
   */
  get(field: string): any {
    const decoded = jwt_decode(this.getToken());
    return decoded[field];
  }

  /**
   * Checks to see if the user is logged in
   *
   * @return A boolean value indicating that status of the user
   */
  isUserLoggedIn(): boolean {
    return localStorage.getItem(TOKEN_NAME) !== null;
  }

  /**
   * Logs the user out and deletes their token from the local cache
   */
  logout() {
    localStorage.removeItem(TOKEN_NAME);
    this.router.navigate(['login']);
  }
}
