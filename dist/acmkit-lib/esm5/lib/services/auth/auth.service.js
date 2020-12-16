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
        this.http
            .post(this.urlService.getAPIUrl + "/authenticate", { username: username, password: password })
            .subscribe(function (response) { return console.log(response.token); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhEOzs7OztHQUtHO0FBRUg7SUFDRSxxQkFBb0IsSUFBZ0IsRUFBVSxVQUFzQjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFFeEU7Ozs7O09BS0c7SUFDSCxrQ0FBWSxHQUFaLFVBQWEsUUFBZ0IsRUFBRSxRQUFnQjtRQUM3QyxJQUFJLENBQUMsSUFBSTthQUNOLElBQUksQ0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsa0JBQWUsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7YUFDekUsU0FBUyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFwQyxDQUFvQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBWnlCLFVBQVU7Z0JBQXNCLFVBQVU7O0lBRHpELFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVyxDQWN2QjtJQUFELGtCQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9hc3NldHMvZ2xvYmFscyc7XHJcbmltcG9ydCB7IFVybFNlcnZpY2UgfSBmcm9tICcuLi91cmwvdXJsLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEF1dGggc2VydmljZSBjbGFzcyB0aGF0IGRlYWxzIHdpdGggYXV0aG9yaXppbmcgYSB1c2VyXHJcbiAqXHJcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxyXG4gKiBAc2luY2UgQXVndXN0IDI0LCAyMDIwXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHVybFNlcnZpY2U6IFVybFNlcnZpY2UpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgYSB1c2VyIGluIGFuZCBnZW5lcmF0ZXMgYSBKV1QgdG9rZW4gZm9yIHRoYXQgdXNlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVzZXJuYW1lIC0gdXNlcm5hbWUgb2YgdGhlIHVzZXJcclxuICAgKiBAcGFyYW0gcGFzc3dvcmQgLSBwYXNzd29yZCBmb3IgdGhlIHVzZXJcclxuICAgKi9cclxuICBhdXRoZW50aWNhdGUodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KGAke3RoaXMudXJsU2VydmljZS5nZXRBUElVcmx9L2F1dGhlbnRpY2F0ZWAsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZygocmVzcG9uc2UgYXMgYW55KS50b2tlbikpO1xyXG4gIH1cclxufVxyXG4iXX0=