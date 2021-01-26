import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
let UserService = class UserService {
    constructor(http, urlService) {
        this.http = http;
        this.urlService = urlService;
    }
    /**
     * Method to create a new user given a User object
     *
     * @param newUser - The new user to be created
     */
    createUser(newUser) {
        return this.http.post(`${this.urlService.getAPIUrl()}/api/acm/users/dim-user`, newUser);
    }
};
UserService.ctorParameters = () => [
    { type: HttpClient },
    { type: UrlService }
];
UserService = __decorate([
    Injectable()
], UserService);
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhEOzs7OztHQUtHO0FBRUgsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUN0QixZQUFvQixJQUFnQixFQUFVLFVBQXNCO1FBQWhELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUV4RTs7OztPQUlHO0lBQ0gsVUFBVSxDQUFDLE9BQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSx5QkFBeUIsRUFDdkQsT0FBTyxDQUNSLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFiMkIsVUFBVTtZQUFzQixVQUFVOztBQUR6RCxXQUFXO0lBRHZCLFVBQVUsRUFBRTtHQUNBLFdBQVcsQ0FjdkI7U0FkWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IFVybFNlcnZpY2UgfSBmcm9tICcuLi91cmwvdXJsLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIFVzZXIgU2VydmljZSBjbGFzcyB0aGF0IGRlYWwgd2l0aCB0aGUgdXNlciBtaWNyb3NlcnZpY2VcclxuICpcclxuICogQGF1dGhvciBTYW0gQnV0bGVyXHJcbiAqIEBzaW5jZSBBdWd1c3QgMzEsIDIwMjBcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgdXJsU2VydmljZTogVXJsU2VydmljZSkge31cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyB1c2VyIGdpdmVuIGEgVXNlciBvYmplY3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSBuZXdVc2VyIC0gVGhlIG5ldyB1c2VyIHRvIGJlIGNyZWF0ZWRcclxuICAgKi9cclxuICBjcmVhdGVVc2VyKG5ld1VzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICBgJHt0aGlzLnVybFNlcnZpY2UuZ2V0QVBJVXJsKCl9L2FwaS9hY20vdXNlcnMvZGltLXVzZXJgLFxyXG4gICAgICBuZXdVc2VyXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=