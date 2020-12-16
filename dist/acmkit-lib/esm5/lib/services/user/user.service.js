import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url/url.service';
/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
var UserService = /** @class */ (function () {
    function UserService(http, urlService) {
        this.http = http;
        this.urlService = urlService;
    }
    /**
     * Method to create a new user given a User object
     *
     * @param newUser - The new user to be created
     */
    UserService.prototype.createUser = function (newUser) {
        this.http
            .post(this.urlService.getAPIUrl() + "/api/acm/users", newUser)
            .subscribe(function (r) { return console.log(r); });
    };
    UserService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: UrlService }
    ]; };
    UserService = __decorate([
        Injectable()
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhEOzs7OztHQUtHO0FBRUg7SUFDRSxxQkFBb0IsSUFBZ0IsRUFBVSxVQUFzQjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFFeEU7Ozs7T0FJRztJQUNILGdDQUFVLEdBQVYsVUFBVyxPQUFhO1FBQ3RCLElBQUksQ0FBQyxJQUFJO2FBQ04sSUFBSSxDQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLG1CQUFnQixFQUFFLE9BQU8sQ0FBQzthQUM3RCxTQUFTLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQVh5QixVQUFVO2dCQUFzQixVQUFVOztJQUR6RCxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVcsQ0FhdkI7SUFBRCxrQkFBQztDQUFBLEFBYkQsSUFhQztTQWJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2dsb2JhbHMnO1xyXG5pbXBvcnQgeyBVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vdXJsL3VybC5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBVc2VyIFNlcnZpY2UgY2xhc3MgdGhhdCBkZWFsIHdpdGggdGhlIHVzZXIgbWljcm9zZXJ2aWNlXHJcbiAqXHJcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxyXG4gKiBAc2luY2UgQXVndXN0IDMxLCAyMDIwXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHVybFNlcnZpY2U6IFVybFNlcnZpY2UpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ldGhvZCB0byBjcmVhdGUgYSBuZXcgdXNlciBnaXZlbiBhIFVzZXIgb2JqZWN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0gbmV3VXNlciAtIFRoZSBuZXcgdXNlciB0byBiZSBjcmVhdGVkXHJcbiAgICovXHJcbiAgY3JlYXRlVXNlcihuZXdVc2VyOiBVc2VyKSB7XHJcbiAgICB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QoYCR7dGhpcy51cmxTZXJ2aWNlLmdldEFQSVVybCgpfS9hcGkvYWNtL3VzZXJzYCwgbmV3VXNlcilcclxuICAgICAgLnN1YnNjcmliZSgocikgPT4gY29uc29sZS5sb2cocikpO1xyXG4gIH1cclxufVxyXG4iXX0=