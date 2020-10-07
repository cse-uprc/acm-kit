import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
    JwtService.ɵprov = i0.ɵɵdefineInjectable({ factory: function JwtService_Factory() { return new JwtService(i0.ɵɵinject(i1.Router)); }, token: JwtService, providedIn: "root" });
    JwtService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], JwtService);
    return JwtService;
}());
export { JwtService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2p3dC9qd3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7OztBQUV6QyxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDO0FBRWxDOzs7Ozs7R0FNRztBQUlIO0lBQ0Usb0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0Qzs7OztPQUlHO0lBQ0gsNkJBQVEsR0FBUjtRQUNFLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDZCQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMkNBQXNCLEdBQXRCO1FBQ0UsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUV2QyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG1DQUFjLEdBQWQ7UUFDRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUMzQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxpQ0FBWSxHQUFaO1FBQ0UsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDekIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9DQUFlLEdBQWY7UUFDRSxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCx3QkFBRyxHQUFILFVBQUksS0FBYTtRQUNmLElBQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG1DQUFjLEdBQWQ7UUFDRSxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFFRDs7T0FFRztJQUNILDJCQUFNLEdBQU47UUFDRSxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkF0RzJCLE1BQU07OztJQUR2QixVQUFVO1FBSHRCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxVQUFVLENBd0d0QjtxQkF4SEQ7Q0F3SEMsQUF4R0QsSUF3R0M7U0F4R1ksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgand0X2RlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuXHJcbmV4cG9ydCBjb25zdCBUT0tFTl9OQU1FID0gJ3Rva2VuJztcclxuXHJcbi8qKlxyXG4gKiBKV1QgY2xhc3MgdG8gaGFuZGxlIGFsbCB0aGUgbW9kaWZpY2F0aW9ucyBvZiBhIHVzZXJzIGp3dCB0b2tlblxyXG4gKiBhbmQgaGFuZGxpbmcgdGhlIHN0b3JpbmcgYW5kIHJldHJpZXZhbCBvZiB0aGUgdG9rZW4uXHJcbiAqXHJcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxyXG4gKiBAc2luY2UgQXVndXN0IDI0LCAyMDIwXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSnd0U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjdXJyZW50IGNhY2hlZCB0b2tlblxyXG4gICAqXHJcbiAgICogQHJldHVybiBTdHJpbmcgdmFsdWUgb2YgdGhlIHRva2VuXHJcbiAgICovXHJcbiAgZ2V0VG9rZW4oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUT0tFTl9OQU1FKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGp3dCB0b2tlbiBmb3IgdGhlIGN1cnJlbnQgYWN0aXZlIHVzZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB0b2tlbiAtIHRoZSB0b2tlbiB0byBzdG9yZSBpbiB0aGUgbG9jYWwgY2FjaGVcclxuICAgKi9cclxuICBzZXRUb2tlbih0b2tlbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUT0tFTl9OQU1FLCB0b2tlbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGV4cGlyYXRpb24gZGF0ZSBvZiB0aGUgY3VycmVudGx5IHN0b3JlZCB0b2tlblxyXG4gICAqXHJcbiAgICogQHJldHVybiBUb2tlbnMgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICovXHJcbiAgZ2V0VG9rZW5FeHBpcmF0aW9uRGF0ZSgpOiBEYXRlIHtcclxuICAgIGNvbnN0IGV4cCA9IHRoaXMuZ2V0RGVjb2RlZFRva2VuKCkuZXhwO1xyXG5cclxuICAgIGlmIChleHAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XHJcbiAgICBkYXRlLnNldFVUQ1NlY29uZHMoZXhwKTtcclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgdXNlcnMgdG9rZW4gaXMgZXhwaXJlZFxyXG4gICAqXHJcbiAgICogQHJldHVybiBCb29sZWFuIGluZGljYXRpbmcgaWYgdGhlIHRva2VuIGlzIGV4cGlyZWRcclxuICAgKi9cclxuICBpc1Rva2VuRXhwaXJlZCgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldFRva2VuRXhwaXJhdGlvbkRhdGUoKTtcclxuICAgIGlmIChkYXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEoZGF0ZS52YWx1ZU9mKCkgPiBuZXcgRGF0ZSgpLnZhbHVlT2YoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25maXJtcyB0aGF0IHRoZSB1c2VycyB0b2tlbiBpcyB2YWxpZFxyXG4gICAqXHJcbiAgICogQHJldHVybiBCb29sZWFuIHNheWluZyBpZiB0aGUgdG9rZW4gaXMgdmFsaWQgb3Igbm90XHJcbiAgICovXHJcbiAgaXNWYWxpZFRva2VuKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRPS0VOX05BTUUpICE9IG51bGwpIHtcclxuICAgICAgaWYgKHRoaXMuaXNUb2tlbkV4cGlyZWQoKSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFRPS0VOX05BTUUpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGRlY29kZWQgdG9rZW4gb2JqZWN0XHJcbiAgICpcclxuICAgKiBAcmV0dXJuIE9iamVjdCBvZiB0aGUgZGVjb2RlZCB0b2tlblxyXG4gICAqL1xyXG4gIGdldERlY29kZWRUb2tlbigpOiBhbnkge1xyXG4gICAgcmV0dXJuIGp3dF9kZWNvZGUodGhpcy5nZXRUb2tlbigpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBtZXRob2QgdG8gZ2V0IGEgY2VydGFpbiBmaWVsZCBmcm9tIHRoZSB1c2VycyB0b2tlblxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZpZWxkIC0gVGhlIGZpZWxkIHdlIHdhbnQgdG8gZ2V0IGZyb20gdGhlIHRva2VuXHJcbiAgICogQHJldHVybiB0aGUgb2JqZWN0IHRoZSBmaWVsZCBjb250YWluc1xyXG4gICAqL1xyXG4gIGdldChmaWVsZDogc3RyaW5nKTogYW55IHtcclxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3RfZGVjb2RlKHRoaXMuZ2V0VG9rZW4oKSk7XHJcbiAgICByZXR1cm4gZGVjb2RlZFtmaWVsZF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpblxyXG4gICAqXHJcbiAgICogQHJldHVybiBBIGJvb2xlYW4gdmFsdWUgaW5kaWNhdGluZyB0aGF0IHN0YXR1cyBvZiB0aGUgdXNlclxyXG4gICAqL1xyXG4gIGlzVXNlckxvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRPS0VOX05BTUUpICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9ncyB0aGUgdXNlciBvdXQgYW5kIGRlbGV0ZXMgdGhlaXIgdG9rZW4gZnJvbSB0aGUgbG9jYWwgY2FjaGVcclxuICAgKi9cclxuICBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShUT0tFTl9OQU1FKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==