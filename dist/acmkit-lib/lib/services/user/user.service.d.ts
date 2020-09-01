import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
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
