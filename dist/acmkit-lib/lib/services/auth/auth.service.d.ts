import { HttpClient } from '@angular/common/http';
/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
export declare class AuthService {
    private http;
    constructor(http: HttpClient);
    /**
     * Logs a user in and generates a JWT token for that user
     *
     * @param username - username of the user
     * @param password - password for the user
     */
    authenticate(username: string, password: string): void;
}
