import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
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
  createUser(newUser: User): Observable<any> {
    return this.http.post(
      `${this.urlService.getAPIUrl()}/api/acm/users/dim-user`,
      newUser
    );
  }
}
