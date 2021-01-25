import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Environment } from '../../assets/globals';
import { UrlService } from '../url/url.service';

/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private urlService: UrlService,
    private router: Router
  ) {}

  /**
   * Logs a user in and generates a JWT token for that user
   *
   * @param username - username of the user
   * @param password - password for the user
   */
  authenticate(username: string, password: string) {
    console.log(`${this.urlService.getAPIUrl()}/authenticate`);
    this.http
      .post(`${this.urlService.getAPIUrl()}/authenticate`, {
        username,
        password,
      })
      .subscribe(() => this.router.navigate(['home']));
  }
}
