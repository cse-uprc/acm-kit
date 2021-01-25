import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url/url.service';
import { Router } from '@angular/router';
/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
let UserService = class UserService {
    constructor(http, urlService, router) {
        this.http = http;
        this.urlService = urlService;
        this.router = router;
    }
    /**
     * Method to create a new user given a User object
     *
     * @param newUser - The new user to be created
     */
    createUser(newUser) {
        this.http
            .post(`${this.urlService.getAPIUrl()}/api/acm/users`, newUser)
            .subscribe((r) => this.router.navigate(['/landing']));
    }
};
UserService.ctorParameters = () => [
    { type: HttpClient },
    { type: UrlService },
    { type: Router }
];
UserService = __decorate([
    Injectable()
], UserService);
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6Qzs7Ozs7R0FLRztBQUVILElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFDdEIsWUFDVSxJQUFnQixFQUNoQixVQUFzQixFQUN0QixNQUFjO1FBRmQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQztJQUVKOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsT0FBYTtRQUN0QixJQUFJLENBQUMsSUFBSTthQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQzthQUM3RCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FDRixDQUFBOztZQWZpQixVQUFVO1lBQ0osVUFBVTtZQUNkLE1BQU07O0FBSmIsV0FBVztJQUR2QixVQUFVLEVBQUU7R0FDQSxXQUFXLENBaUJ2QjtTQWpCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vdXJsL3VybC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8qKlxyXG4gKiBVc2VyIFNlcnZpY2UgY2xhc3MgdGhhdCBkZWFsIHdpdGggdGhlIHVzZXIgbWljcm9zZXJ2aWNlXHJcbiAqXHJcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxyXG4gKiBAc2luY2UgQXVndXN0IDMxLCAyMDIwXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIHVybFNlcnZpY2U6IFVybFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgdG8gY3JlYXRlIGEgbmV3IHVzZXIgZ2l2ZW4gYSBVc2VyIG9iamVjdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIG5ld1VzZXIgLSBUaGUgbmV3IHVzZXIgdG8gYmUgY3JlYXRlZFxyXG4gICAqL1xyXG4gIGNyZWF0ZVVzZXIobmV3VXNlcjogVXNlcikge1xyXG4gICAgdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KGAke3RoaXMudXJsU2VydmljZS5nZXRBUElVcmwoKX0vYXBpL2FjbS91c2Vyc2AsIG5ld1VzZXIpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHIpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xhbmRpbmcnXSkpO1xyXG4gIH1cclxufVxyXG4iXX0=