import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
var AuthService = /** @class */ (function () {
    function AuthService(http, urlService) {
        this.http = http;
        this.urlService = urlService;
    }
    /**
     * Logs a user in and generates a JWT token for that user
     *
     * @param username - username of the user
     * @param password - password for the user
     */
    AuthService.prototype.authenticate = function (username, password) {
        return this.http.post(this.urlService.getAPIUrl() + "/authenticate", {
            username: username,
            password: password,
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: UrlService }
    ]; };
    AuthService = __decorate([
        Injectable()
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhEOzs7OztHQUtHO0FBRUg7SUFDRSxxQkFDbUIsSUFBZ0IsRUFDaEIsVUFBc0I7UUFEdEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQ3RDLENBQUM7SUFFSjs7Ozs7T0FLRztJQUNILGtDQUFZLEdBQVosVUFBYSxRQUFnQixFQUFFLFFBQWdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsa0JBQWUsRUFBRTtZQUNuRSxRQUFRLFVBQUE7WUFDUixRQUFRLFVBQUE7U0FDVCxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFmd0IsVUFBVTtnQkFDSixVQUFVOztJQUg5QixXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVcsQ0FrQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFVybFNlcnZpY2UgfSBmcm9tICcuLi91cmwvdXJsLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEF1dGggc2VydmljZSBjbGFzcyB0aGF0IGRlYWxzIHdpdGggYXV0aG9yaXppbmcgYSB1c2VyXHJcbiAqXHJcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxyXG4gKiBAc2luY2UgQXVndXN0IDI0LCAyMDIwXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVybFNlcnZpY2U6IFVybFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgYSB1c2VyIGluIGFuZCBnZW5lcmF0ZXMgYSBKV1QgdG9rZW4gZm9yIHRoYXQgdXNlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVzZXJuYW1lIC0gdXNlcm5hbWUgb2YgdGhlIHVzZXJcclxuICAgKiBAcGFyYW0gcGFzc3dvcmQgLSBwYXNzd29yZCBmb3IgdGhlIHVzZXJcclxuICAgKi9cclxuICBhdXRoZW50aWNhdGUodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cmxTZXJ2aWNlLmdldEFQSVVybCgpfS9hdXRoZW50aWNhdGVgLCB7XHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=