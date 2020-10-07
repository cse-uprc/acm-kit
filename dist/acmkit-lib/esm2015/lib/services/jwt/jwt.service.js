import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
JwtService.ɵprov = i0.ɵɵdefineInjectable({ factory: function JwtService_Factory() { return new JwtService(i0.ɵɵinject(i1.Router)); }, token: JwtService, providedIn: "root" });
JwtService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], JwtService);
export { JwtService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2p3dC9qd3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7OztBQUV6QyxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDO0FBRWxDOzs7Ozs7R0FNRztBQUlILElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUFDckIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXRDOzs7O09BSUc7SUFDSCxRQUFRO1FBQ04sT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsUUFBUSxDQUFDLEtBQWE7UUFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxzQkFBc0I7UUFDcEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUV2QyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7UUFDWixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUMzQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxZQUFZO1FBQ1YsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDekIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGVBQWU7UUFDYixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxHQUFHLENBQUMsS0FBYTtRQUNmLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWM7UUFDWixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0YsQ0FBQTs7WUF2RzZCLE1BQU07OztBQUR2QixVQUFVO0lBSHRCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxVQUFVLENBd0d0QjtTQXhHWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBqd3RfZGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRPS0VOX05BTUUgPSAndG9rZW4nO1xyXG5cclxuLyoqXHJcbiAqIEpXVCBjbGFzcyB0byBoYW5kbGUgYWxsIHRoZSBtb2RpZmljYXRpb25zIG9mIGEgdXNlcnMgand0IHRva2VuXHJcbiAqIGFuZCBoYW5kbGluZyB0aGUgc3RvcmluZyBhbmQgcmV0cmlldmFsIG9mIHRoZSB0b2tlbi5cclxuICpcclxuICogQGF1dGhvciBTYW0gQnV0bGVyXHJcbiAqIEBzaW5jZSBBdWd1c3QgMjQsIDIwMjBcclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKd3RTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FjaGVkIHRva2VuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIFN0cmluZyB2YWx1ZSBvZiB0aGUgdG9rZW5cclxuICAgKi9cclxuICBnZXRUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRPS0VOX05BTUUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgand0IHRva2VuIGZvciB0aGUgY3VycmVudCBhY3RpdmUgdXNlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRva2VuIC0gdGhlIHRva2VuIHRvIHN0b3JlIGluIHRoZSBsb2NhbCBjYWNoZVxyXG4gICAqL1xyXG4gIHNldFRva2VuKHRva2VuOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRPS0VOX05BTUUsIHRva2VuKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgZXhwaXJhdGlvbiBkYXRlIG9mIHRoZSBjdXJyZW50bHkgc3RvcmVkIHRva2VuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIFRva2VucyBleHBpcmF0aW9uIGRhdGVcclxuICAgKi9cclxuICBnZXRUb2tlbkV4cGlyYXRpb25EYXRlKCk6IERhdGUge1xyXG4gICAgY29uc3QgZXhwID0gdGhpcy5nZXREZWNvZGVkVG9rZW4oKS5leHA7XHJcblxyXG4gICAgaWYgKGV4cCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcclxuICAgIGRhdGUuc2V0VVRDU2Vjb25kcyhleHApO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSB1c2VycyB0b2tlbiBpcyBleHBpcmVkXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIEJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgdG9rZW4gaXMgZXhwaXJlZFxyXG4gICAqL1xyXG4gIGlzVG9rZW5FeHBpcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuZ2V0VG9rZW5FeHBpcmF0aW9uRGF0ZSgpO1xyXG4gICAgaWYgKGRhdGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIShkYXRlLnZhbHVlT2YoKSA+IG5ldyBEYXRlKCkudmFsdWVPZigpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbmZpcm1zIHRoYXQgdGhlIHVzZXJzIHRva2VuIGlzIHZhbGlkXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIEJvb2xlYW4gc2F5aW5nIGlmIHRoZSB0b2tlbiBpcyB2YWxpZCBvciBub3RcclxuICAgKi9cclxuICBpc1ZhbGlkVG9rZW4oKTogYm9vbGVhbiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oVE9LRU5fTkFNRSkgIT0gbnVsbCkge1xyXG4gICAgICBpZiAodGhpcy5pc1Rva2VuRXhwaXJlZCgpKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVE9LRU5fTkFNRSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgZGVjb2RlZCB0b2tlbiBvYmplY3RcclxuICAgKlxyXG4gICAqIEByZXR1cm4gT2JqZWN0IG9mIHRoZSBkZWNvZGVkIHRva2VuXHJcbiAgICovXHJcbiAgZ2V0RGVjb2RlZFRva2VuKCk6IGFueSB7XHJcbiAgICByZXR1cm4gand0X2RlY29kZSh0aGlzLmdldFRva2VuKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IG1ldGhvZCB0byBnZXQgYSBjZXJ0YWluIGZpZWxkIGZyb20gdGhlIHVzZXJzIHRva2VuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZmllbGQgLSBUaGUgZmllbGQgd2Ugd2FudCB0byBnZXQgZnJvbSB0aGUgdG9rZW5cclxuICAgKiBAcmV0dXJuIHRoZSBvYmplY3QgdGhlIGZpZWxkIGNvbnRhaW5zXHJcbiAgICovXHJcbiAgZ2V0KGZpZWxkOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dF9kZWNvZGUodGhpcy5nZXRUb2tlbigpKTtcclxuICAgIHJldHVybiBkZWNvZGVkW2ZpZWxkXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIEEgYm9vbGVhbiB2YWx1ZSBpbmRpY2F0aW5nIHRoYXQgc3RhdHVzIG9mIHRoZSB1c2VyXHJcbiAgICovXHJcbiAgaXNVc2VyTG9nZ2VkSW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVE9LRU5fTkFNRSkgIT09IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIHRoZSB1c2VyIG91dCBhbmQgZGVsZXRlcyB0aGVpciB0b2tlbiBmcm9tIHRoZSBsb2NhbCBjYWNoZVxyXG4gICAqL1xyXG4gIGxvZ291dCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFRPS0VOX05BTUUpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICB9XHJcbn1cclxuIl19