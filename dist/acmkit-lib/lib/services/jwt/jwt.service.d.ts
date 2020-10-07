import { Router } from '@angular/router';
export declare const TOKEN_NAME = "token";
/**
 * JWT class to handle all the modifications of a users jwt token
 * and handling the storing and retrieval of the token.
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
export declare class JwtService {
    private router;
    constructor(router: Router);
    /**
     * Get the current cached token
     *
     * @return String value of the token
     */
    getToken(): string;
    /**
     * Sets the jwt token for the current active user
     *
     * @param token - the token to store in the local cache
     */
    setToken(token: string): void;
    /**
     * Get the expiration date of the currently stored token
     *
     * @return Tokens expiration date
     */
    getTokenExpirationDate(): Date;
    /**
     * Checks to see if the users token is expired
     *
     * @return Boolean indicating if the token is expired
     */
    isTokenExpired(): boolean;
    /**
     * Confirms that the users token is valid
     *
     * @return Boolean saying if the token is valid or not
     */
    isValidToken(): boolean;
    /**
     * Gets the decoded token object
     *
     * @return Object of the decoded token
     */
    getDecodedToken(): any;
    /**
     * Get method to get a certain field from the users token
     *
     * @param field - The field we want to get from the token
     * @return the object the field contains
     */
    get(field: string): any;
    /**
     * Checks to see if the user is logged in
     *
     * @return A boolean value indicating that status of the user
     */
    isUserLoggedIn(): boolean;
    /**
     * Logs the user out and deletes their token from the local cache
     */
    logout(): void;
}
