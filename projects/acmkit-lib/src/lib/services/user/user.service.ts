import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Environment } from '../../assets/globals';
import { UrlService } from '../url/url.service';

/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
@Injectable()
export class UserService {
  constructor(private http: HttpClient, private urlService: UrlService) {}

  /**
   * Method to create a new user given a User object
   *
   * @param newUser - The new user to be created
   */
  createUser(newUser: User) {
    this.http
      .post(`${this.urlService.getAPIUrl()}/api/acm/users`, newUser)
      .subscribe((r) => console.log(r));
  }
}
