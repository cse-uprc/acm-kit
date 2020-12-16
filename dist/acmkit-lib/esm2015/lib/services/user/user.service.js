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
        this.http
            .post(`${this.urlService.getAPIUrl()}/api/acm/users`, newUser)
            .subscribe((r) => console.log(r));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhEOzs7OztHQUtHO0FBRUgsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUN0QixZQUFvQixJQUFnQixFQUFVLFVBQXNCO1FBQWhELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUV4RTs7OztPQUlHO0lBQ0gsVUFBVSxDQUFDLE9BQWE7UUFDdEIsSUFBSSxDQUFDLElBQUk7YUFDTixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLENBQUM7YUFDN0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGLENBQUE7O1lBWjJCLFVBQVU7WUFBc0IsVUFBVTs7QUFEekQsV0FBVztJQUR2QixVQUFVLEVBQUU7R0FDQSxXQUFXLENBYXZCO1NBYlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9hc3NldHMvZ2xvYmFscyc7XHJcbmltcG9ydCB7IFVybFNlcnZpY2UgfSBmcm9tICcuLi91cmwvdXJsLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIFVzZXIgU2VydmljZSBjbGFzcyB0aGF0IGRlYWwgd2l0aCB0aGUgdXNlciBtaWNyb3NlcnZpY2VcclxuICpcclxuICogQGF1dGhvciBTYW0gQnV0bGVyXHJcbiAqIEBzaW5jZSBBdWd1c3QgMzEsIDIwMjBcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgdXJsU2VydmljZTogVXJsU2VydmljZSkge31cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyB1c2VyIGdpdmVuIGEgVXNlciBvYmplY3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSBuZXdVc2VyIC0gVGhlIG5ldyB1c2VyIHRvIGJlIGNyZWF0ZWRcclxuICAgKi9cclxuICBjcmVhdGVVc2VyKG5ld1VzZXI6IFVzZXIpIHtcclxuICAgIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdChgJHt0aGlzLnVybFNlcnZpY2UuZ2V0QVBJVXJsKCl9L2FwaS9hY20vdXNlcnNgLCBuZXdVc2VyKVxyXG4gICAgICAuc3Vic2NyaWJlKChyKSA9PiBjb25zb2xlLmxvZyhyKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==