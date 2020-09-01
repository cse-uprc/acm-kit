import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Environment } from '../../assets/globals';

@Injectable({
  providedIn: 'root',
})
/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
export class UserService {
  private BASE = Environment.API_URL;
  private USER_MICROSERVICE = `${this.BASE}/api/acm/users`;
  constructor(private http: HttpClient) {}

  /**
   * Method to create a new user given a User object
   *
   * @param newUser - The new user to be created
   */
  createUser(newUser: User) {
    this.http
      .post(this.USER_MICROSERVICE, newUser)
      .subscribe((r) => console.log(r));
  }
}
