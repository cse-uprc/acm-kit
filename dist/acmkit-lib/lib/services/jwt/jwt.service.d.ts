import { Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JwtService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<JwtService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiand0LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5leHBvcnQgZGVjbGFyZSBjb25zdCBUT0tFTl9OQU1FID0gXCJ0b2tlblwiO1xyXG4vKipcclxuICogSldUIGNsYXNzIHRvIGhhbmRsZSBhbGwgdGhlIG1vZGlmaWNhdGlvbnMgb2YgYSB1c2VycyBqd3QgdG9rZW5cclxuICogYW5kIGhhbmRsaW5nIHRoZSBzdG9yaW5nIGFuZCByZXRyaWV2YWwgb2YgdGhlIHRva2VuLlxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIEF1Z3VzdCAyNCwgMjAyMFxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSnd0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIHJvdXRlcjtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKTtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGNhY2hlZCB0b2tlblxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gU3RyaW5nIHZhbHVlIG9mIHRoZSB0b2tlblxyXG4gICAgICovXHJcbiAgICBnZXRUb2tlbigpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGp3dCB0b2tlbiBmb3IgdGhlIGN1cnJlbnQgYWN0aXZlIHVzZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdG9rZW4gLSB0aGUgdG9rZW4gdG8gc3RvcmUgaW4gdGhlIGxvY2FsIGNhY2hlXHJcbiAgICAgKi9cclxuICAgIHNldFRva2VuKHRva2VuOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGV4cGlyYXRpb24gZGF0ZSBvZiB0aGUgY3VycmVudGx5IHN0b3JlZCB0b2tlblxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gVG9rZW5zIGV4cGlyYXRpb24gZGF0ZVxyXG4gICAgICovXHJcbiAgICBnZXRUb2tlbkV4cGlyYXRpb25EYXRlKCk6IERhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIHVzZXJzIHRva2VuIGlzIGV4cGlyZWRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIEJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgdG9rZW4gaXMgZXhwaXJlZFxyXG4gICAgICovXHJcbiAgICBpc1Rva2VuRXhwaXJlZCgpOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maXJtcyB0aGF0IHRoZSB1c2VycyB0b2tlbiBpcyB2YWxpZFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gQm9vbGVhbiBzYXlpbmcgaWYgdGhlIHRva2VuIGlzIHZhbGlkIG9yIG5vdFxyXG4gICAgICovXHJcbiAgICBpc1ZhbGlkVG9rZW4oKTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgZGVjb2RlZCB0b2tlbiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIE9iamVjdCBvZiB0aGUgZGVjb2RlZCB0b2tlblxyXG4gICAgICovXHJcbiAgICBnZXREZWNvZGVkVG9rZW4oKTogYW55O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgbWV0aG9kIHRvIGdldCBhIGNlcnRhaW4gZmllbGQgZnJvbSB0aGUgdXNlcnMgdG9rZW5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZmllbGQgLSBUaGUgZmllbGQgd2Ugd2FudCB0byBnZXQgZnJvbSB0aGUgdG9rZW5cclxuICAgICAqIEByZXR1cm4gdGhlIG9iamVjdCB0aGUgZmllbGQgY29udGFpbnNcclxuICAgICAqL1xyXG4gICAgZ2V0KGZpZWxkOiBzdHJpbmcpOiBhbnk7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBBIGJvb2xlYW4gdmFsdWUgaW5kaWNhdGluZyB0aGF0IHN0YXR1cyBvZiB0aGUgdXNlclxyXG4gICAgICovXHJcbiAgICBpc1VzZXJMb2dnZWRJbigpOiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIHRoZSB1c2VyIG91dCBhbmQgZGVsZXRlcyB0aGVpciB0b2tlbiBmcm9tIHRoZSBsb2NhbCBjYWNoZVxyXG4gICAgICovXHJcbiAgICBsb2dvdXQoKTogdm9pZDtcclxufVxyXG4iXX0=