import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from '../url/url.service';
/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
export declare class AuthService {
    private readonly http;
    private readonly urlService;
    constructor(http: HttpClient, urlService: UrlService);
    /**
     * Logs a user in and generates a JWT token for that user
     *
     * @param username - username of the user
     * @param password - password for the user
     */
    authenticate(username: string, password: string): Observable<any>;
}
