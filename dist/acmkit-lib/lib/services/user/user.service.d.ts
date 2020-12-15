import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
export declare class UserService {
    private http;
    private BASE;
    private USER_MICROSERVICE;
    constructor(http: HttpClient);
    /**
     * Method to create a new user given a User object
     *
     * @param newUser - The new user to be created
     */
    createUser(newUser: User): void;
}
