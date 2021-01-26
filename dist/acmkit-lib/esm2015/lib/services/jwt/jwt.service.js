import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
export const TOKEN_NAME = 'token';
/**
 * JWT class to handle all the modifications of a users jwt token
 * and handling the storing and retrieval of the token.
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
let JwtService = class JwtService {
    constructor(router) {
        this.router = router;
    }
    /**
     * Get the current cached token
     *
     * @return String value of the token
     */
    getToken() {
        return localStorage.getItem(TOKEN_NAME);
    }
    /**
     * Sets the jwt token for the current active user
     *
     * @param token - the token to store in the local cache
     */
    setToken(token) {
        localStorage.setItem(TOKEN_NAME, token);
    }
    /**
     * Get the expiration date of the currently stored token
     *
     * @return Tokens expiration date
     */
    getTokenExpirationDate() {
        const exp = this.getDecodedToken().exp;
        if (exp === undefined) {
            return null;
        }
        const date = new Date(0);
        date.setUTCSeconds(exp);
        return date;
    }
    /**
     * Checks to see if the users token is expired
     *
     * @return Boolean indicating if the token is expired
     */
    isTokenExpired() {
        const date = this.getTokenExpirationDate();
        if (date === undefined) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf());
    }
    /**
     * Confirms that the users token is valid
     *
     * @return Boolean saying if the token is valid or not
     */
    isValidToken() {
        if (localStorage.getItem(TOKEN_NAME) != null) {
            if (this.isTokenExpired()) {
                localStorage.removeItem(TOKEN_NAME);
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Gets the decoded token object
     *
     * @return Object of the decoded token
     */
    getDecodedToken() {
        return jwt_decode(this.getToken());
    }
    /**
     * Get method to get a certain field from the users token
     *
     * @param field - The field we want to get from the token
     * @return the object the field contains
     */
    get(field) {
        const decoded = jwt_decode(this.getToken());
        return decoded[field];
    }
    /**
     * Checks to see if the user is logged in
     *
     * @return A boolean value indicating that status of the user
     */
    isUserLoggedIn() {
        return localStorage.getItem(TOKEN_NAME) !== null;
    }
    /**
     * Logs the user out and deletes their token from the local cache
     */
    logout() {
        localStorage.removeItem(TOKEN_NAME);
        this.router.navigate(['login']);
    }
};
JwtService.ctorParameters = () => [
    { type: Router }
];
JwtService = __decorate([
    Injectable()
], JwtService);
export { JwtService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2p3dC9qd3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFFekMsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQztBQUVsQzs7Ozs7O0dBTUc7QUFFSCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBQ3JCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0Qzs7OztPQUlHO0lBQ0gsUUFBUTtRQUNOLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsc0JBQXNCO1FBQ3BCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFFdkMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO1FBQ1osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDM0MsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsWUFBWTtRQUNWLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ3pCLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxlQUFlO1FBQ2IsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsR0FBRyxDQUFDLEtBQWE7UUFDZixNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDNUMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGLENBQUE7O1lBdkc2QixNQUFNOztBQUR2QixVQUFVO0lBRHRCLFVBQVUsRUFBRTtHQUNBLFVBQVUsQ0F3R3RCO1NBeEdZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAqIGFzIGp3dF9kZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVE9LRU5fTkFNRSA9ICd0b2tlbic7XHJcblxyXG4vKipcclxuICogSldUIGNsYXNzIHRvIGhhbmRsZSBhbGwgdGhlIG1vZGlmaWNhdGlvbnMgb2YgYSB1c2VycyBqd3QgdG9rZW5cclxuICogYW5kIGhhbmRsaW5nIHRoZSBzdG9yaW5nIGFuZCByZXRyaWV2YWwgb2YgdGhlIHRva2VuLlxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIEF1Z3VzdCAyNCwgMjAyMFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSnd0U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjdXJyZW50IGNhY2hlZCB0b2tlblxyXG4gICAqXHJcbiAgICogQHJldHVybiBTdHJpbmcgdmFsdWUgb2YgdGhlIHRva2VuXHJcbiAgICovXHJcbiAgZ2V0VG9rZW4oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUT0tFTl9OQU1FKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGp3dCB0b2tlbiBmb3IgdGhlIGN1cnJlbnQgYWN0aXZlIHVzZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB0b2tlbiAtIHRoZSB0b2tlbiB0byBzdG9yZSBpbiB0aGUgbG9jYWwgY2FjaGVcclxuICAgKi9cclxuICBzZXRUb2tlbih0b2tlbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUT0tFTl9OQU1FLCB0b2tlbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGV4cGlyYXRpb24gZGF0ZSBvZiB0aGUgY3VycmVudGx5IHN0b3JlZCB0b2tlblxyXG4gICAqXHJcbiAgICogQHJldHVybiBUb2tlbnMgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICovXHJcbiAgZ2V0VG9rZW5FeHBpcmF0aW9uRGF0ZSgpOiBEYXRlIHtcclxuICAgIGNvbnN0IGV4cCA9IHRoaXMuZ2V0RGVjb2RlZFRva2VuKCkuZXhwO1xyXG5cclxuICAgIGlmIChleHAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XHJcbiAgICBkYXRlLnNldFVUQ1NlY29uZHMoZXhwKTtcclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgdXNlcnMgdG9rZW4gaXMgZXhwaXJlZFxyXG4gICAqXHJcbiAgICogQHJldHVybiBCb29sZWFuIGluZGljYXRpbmcgaWYgdGhlIHRva2VuIGlzIGV4cGlyZWRcclxuICAgKi9cclxuICBpc1Rva2VuRXhwaXJlZCgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldFRva2VuRXhwaXJhdGlvbkRhdGUoKTtcclxuICAgIGlmIChkYXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEoZGF0ZS52YWx1ZU9mKCkgPiBuZXcgRGF0ZSgpLnZhbHVlT2YoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25maXJtcyB0aGF0IHRoZSB1c2VycyB0b2tlbiBpcyB2YWxpZFxyXG4gICAqXHJcbiAgICogQHJldHVybiBCb29sZWFuIHNheWluZyBpZiB0aGUgdG9rZW4gaXMgdmFsaWQgb3Igbm90XHJcbiAgICovXHJcbiAgaXNWYWxpZFRva2VuKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRPS0VOX05BTUUpICE9IG51bGwpIHtcclxuICAgICAgaWYgKHRoaXMuaXNUb2tlbkV4cGlyZWQoKSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFRPS0VOX05BTUUpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGRlY29kZWQgdG9rZW4gb2JqZWN0XHJcbiAgICpcclxuICAgKiBAcmV0dXJuIE9iamVjdCBvZiB0aGUgZGVjb2RlZCB0b2tlblxyXG4gICAqL1xyXG4gIGdldERlY29kZWRUb2tlbigpOiBhbnkge1xyXG4gICAgcmV0dXJuIGp3dF9kZWNvZGUodGhpcy5nZXRUb2tlbigpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBtZXRob2QgdG8gZ2V0IGEgY2VydGFpbiBmaWVsZCBmcm9tIHRoZSB1c2VycyB0b2tlblxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZpZWxkIC0gVGhlIGZpZWxkIHdlIHdhbnQgdG8gZ2V0IGZyb20gdGhlIHRva2VuXHJcbiAgICogQHJldHVybiB0aGUgb2JqZWN0IHRoZSBmaWVsZCBjb250YWluc1xyXG4gICAqL1xyXG4gIGdldChmaWVsZDogc3RyaW5nKTogYW55IHtcclxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3RfZGVjb2RlKHRoaXMuZ2V0VG9rZW4oKSk7XHJcbiAgICByZXR1cm4gZGVjb2RlZFtmaWVsZF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpblxyXG4gICAqXHJcbiAgICogQHJldHVybiBBIGJvb2xlYW4gdmFsdWUgaW5kaWNhdGluZyB0aGF0IHN0YXR1cyBvZiB0aGUgdXNlclxyXG4gICAqL1xyXG4gIGlzVXNlckxvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRPS0VOX05BTUUpICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyB0aGUgdXNlciBvdXQgYW5kIGRlbGV0ZXMgdGhlaXIgdG9rZW4gZnJvbSB0aGUgbG9jYWwgY2FjaGVcclxuICAgKi9cclxuICBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShUT0tFTl9OQU1FKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==