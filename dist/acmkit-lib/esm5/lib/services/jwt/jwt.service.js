import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
export var TOKEN_NAME = 'token';
/**
 * JWT class to handle all the modifications of a users jwt token
 * and handling the storing and retrieval of the token.
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
var JwtService = /** @class */ (function () {
    function JwtService(router) {
        this.router = router;
    }
    /**
     * Get the current cached token
     *
     * @return String value of the token
     */
    JwtService.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_NAME);
    };
    /**
     * Sets the jwt token for the current active user
     *
     * @param token - the token to store in the local cache
     */
    JwtService.prototype.setToken = function (token) {
        localStorage.setItem(TOKEN_NAME, token);
    };
    /**
     * Get the expiration date of the currently stored token
     *
     * @return Tokens expiration date
     */
    JwtService.prototype.getTokenExpirationDate = function () {
        var exp = this.getDecodedToken().exp;
        if (exp === undefined) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(exp);
        return date;
    };
    /**
     * Checks to see if the users token is expired
     *
     * @return Boolean indicating if the token is expired
     */
    JwtService.prototype.isTokenExpired = function () {
        var date = this.getTokenExpirationDate();
        if (date === undefined) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf());
    };
    /**
     * Confirms that the users token is valid
     *
     * @return Boolean saying if the token is valid or not
     */
    JwtService.prototype.isValidToken = function () {
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
    };
    /**
     * Gets the decoded token object
     *
     * @return Object of the decoded token
     */
    JwtService.prototype.getDecodedToken = function () {
        return jwt_decode(this.getToken());
    };
    /**
     * Get method to get a certain field from the users token
     *
     * @param field - The field we want to get from the token
     * @return the object the field contains
     */
    JwtService.prototype.get = function (field) {
        var decoded = jwt_decode(this.getToken());
        return decoded[field];
    };
    /**
     * Checks to see if the user is logged in
     *
     * @return A boolean value indicating that status of the user
     */
    JwtService.prototype.isUserLoggedIn = function () {
        return localStorage.getItem(TOKEN_NAME) !== null;
    };
    /**
     * Logs the user out and deletes their token from the local cache
     */
    JwtService.prototype.logout = function () {
        localStorage.removeItem(TOKEN_NAME);
        this.router.navigate(['login']);
    };
    JwtService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    JwtService = __decorate([
        Injectable()
    ], JwtService);
    return JwtService;
}());
export { JwtService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2p3dC9qd3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFFekMsTUFBTSxDQUFDLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQztBQUVsQzs7Ozs7O0dBTUc7QUFFSDtJQUNFLG9CQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFdEM7Ozs7T0FJRztJQUNILDZCQUFRLEdBQVI7UUFDRSxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw2QkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNwQixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDJDQUFzQixHQUF0QjtRQUNFLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFFdkMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQ0FBYyxHQUFkO1FBQ0UsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDM0MsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaUNBQVksR0FBWjtRQUNFLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ3pCLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQ0FBZSxHQUFmO1FBQ0UsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsd0JBQUcsR0FBSCxVQUFJLEtBQWE7UUFDZixJQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDNUMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQ0FBYyxHQUFkO1FBQ0UsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCwyQkFBTSxHQUFOO1FBQ0UsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBdEcyQixNQUFNOztJQUR2QixVQUFVO1FBRHRCLFVBQVUsRUFBRTtPQUNBLFVBQVUsQ0F3R3RCO0lBQUQsaUJBQUM7Q0FBQSxBQXhHRCxJQXdHQztTQXhHWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBqd3RfZGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRPS0VOX05BTUUgPSAndG9rZW4nO1xyXG5cclxuLyoqXHJcbiAqIEpXVCBjbGFzcyB0byBoYW5kbGUgYWxsIHRoZSBtb2RpZmljYXRpb25zIG9mIGEgdXNlcnMgand0IHRva2VuXHJcbiAqIGFuZCBoYW5kbGluZyB0aGUgc3RvcmluZyBhbmQgcmV0cmlldmFsIG9mIHRoZSB0b2tlbi5cclxuICpcclxuICogQGF1dGhvciBTYW0gQnV0bGVyXHJcbiAqIEBzaW5jZSBBdWd1c3QgMjQsIDIwMjBcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEp3dFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY3VycmVudCBjYWNoZWQgdG9rZW5cclxuICAgKlxyXG4gICAqIEByZXR1cm4gU3RyaW5nIHZhbHVlIG9mIHRoZSB0b2tlblxyXG4gICAqL1xyXG4gIGdldFRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVE9LRU5fTkFNRSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBqd3QgdG9rZW4gZm9yIHRoZSBjdXJyZW50IGFjdGl2ZSB1c2VyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdG9rZW4gLSB0aGUgdG9rZW4gdG8gc3RvcmUgaW4gdGhlIGxvY2FsIGNhY2hlXHJcbiAgICovXHJcbiAgc2V0VG9rZW4odG9rZW46IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVE9LRU5fTkFNRSwgdG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBleHBpcmF0aW9uIGRhdGUgb2YgdGhlIGN1cnJlbnRseSBzdG9yZWQgdG9rZW5cclxuICAgKlxyXG4gICAqIEByZXR1cm4gVG9rZW5zIGV4cGlyYXRpb24gZGF0ZVxyXG4gICAqL1xyXG4gIGdldFRva2VuRXhwaXJhdGlvbkRhdGUoKTogRGF0ZSB7XHJcbiAgICBjb25zdCBleHAgPSB0aGlzLmdldERlY29kZWRUb2tlbigpLmV4cDtcclxuXHJcbiAgICBpZiAoZXhwID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKDApO1xyXG4gICAgZGF0ZS5zZXRVVENTZWNvbmRzKGV4cCk7XHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIHVzZXJzIHRva2VuIGlzIGV4cGlyZWRcclxuICAgKlxyXG4gICAqIEByZXR1cm4gQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSB0b2tlbiBpcyBleHBpcmVkXHJcbiAgICovXHJcbiAgaXNUb2tlbkV4cGlyZWQoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkYXRlID0gdGhpcy5nZXRUb2tlbkV4cGlyYXRpb25EYXRlKCk7XHJcbiAgICBpZiAoZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAhKGRhdGUudmFsdWVPZigpID4gbmV3IERhdGUoKS52YWx1ZU9mKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uZmlybXMgdGhhdCB0aGUgdXNlcnMgdG9rZW4gaXMgdmFsaWRcclxuICAgKlxyXG4gICAqIEByZXR1cm4gQm9vbGVhbiBzYXlpbmcgaWYgdGhlIHRva2VuIGlzIHZhbGlkIG9yIG5vdFxyXG4gICAqL1xyXG4gIGlzVmFsaWRUb2tlbigpOiBib29sZWFuIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUT0tFTl9OQU1FKSAhPSBudWxsKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzVG9rZW5FeHBpcmVkKCkpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShUT0tFTl9OQU1FKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBkZWNvZGVkIHRva2VuIG9iamVjdFxyXG4gICAqXHJcbiAgICogQHJldHVybiBPYmplY3Qgb2YgdGhlIGRlY29kZWQgdG9rZW5cclxuICAgKi9cclxuICBnZXREZWNvZGVkVG9rZW4oKTogYW55IHtcclxuICAgIHJldHVybiBqd3RfZGVjb2RlKHRoaXMuZ2V0VG9rZW4oKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbWV0aG9kIHRvIGdldCBhIGNlcnRhaW4gZmllbGQgZnJvbSB0aGUgdXNlcnMgdG9rZW5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBmaWVsZCAtIFRoZSBmaWVsZCB3ZSB3YW50IHRvIGdldCBmcm9tIHRoZSB0b2tlblxyXG4gICAqIEByZXR1cm4gdGhlIG9iamVjdCB0aGUgZmllbGQgY29udGFpbnNcclxuICAgKi9cclxuICBnZXQoZmllbGQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCBkZWNvZGVkID0gand0X2RlY29kZSh0aGlzLmdldFRva2VuKCkpO1xyXG4gICAgcmV0dXJuIGRlY29kZWRbZmllbGRdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgdXNlciBpcyBsb2dnZWQgaW5cclxuICAgKlxyXG4gICAqIEByZXR1cm4gQSBib29sZWFuIHZhbHVlIGluZGljYXRpbmcgdGhhdCBzdGF0dXMgb2YgdGhlIHVzZXJcclxuICAgKi9cclxuICBpc1VzZXJMb2dnZWRJbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUT0tFTl9OQU1FKSAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgdGhlIHVzZXIgb3V0IGFuZCBkZWxldGVzIHRoZWlyIHRva2VuIGZyb20gdGhlIGxvY2FsIGNhY2hlXHJcbiAgICovXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVE9LRU5fTkFNRSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gIH1cclxufVxyXG4iXX0=