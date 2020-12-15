import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../assets/globals';
/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.BASE = Environment.API_URL;
        this.USER_MICROSERVICE = `${this.BASE}/api/acm/users`;
    }
    /**
     * Method to create a new user given a User object
     *
     * @param newUser - The new user to be created
     */
    createUser(newUser) {
        this.http
            .post(this.USER_MICROSERVICE, newUser)
            .subscribe((r) => console.log(r));
    }
};
UserService.ctorParameters = () => [
    { type: HttpClient }
];
UserService = __decorate([
    Injectable()
], UserService);
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5EOzs7OztHQUtHO0FBRUgsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUd0QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjVCLFNBQUksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQzNCLHNCQUFpQixHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUM7SUFDbEIsQ0FBQztJQUV4Qzs7OztPQUlHO0lBQ0gsVUFBVSxDQUFDLE9BQWE7UUFDdEIsSUFBSSxDQUFDLElBQUk7YUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQzthQUNyQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0YsQ0FBQTs7WUFaMkIsVUFBVTs7QUFIekIsV0FBVztJQUR2QixVQUFVLEVBQUU7R0FDQSxXQUFXLENBZXZCO1NBZlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9hc3NldHMvZ2xvYmFscyc7XHJcblxyXG4vKipcclxuICogVXNlciBTZXJ2aWNlIGNsYXNzIHRoYXQgZGVhbCB3aXRoIHRoZSB1c2VyIG1pY3Jvc2VydmljZVxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIEF1Z3VzdCAzMSwgMjAyMFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgQkFTRSA9IEVudmlyb25tZW50LkFQSV9VUkw7XHJcbiAgcHJpdmF0ZSBVU0VSX01JQ1JPU0VSVklDRSA9IGAke3RoaXMuQkFTRX0vYXBpL2FjbS91c2Vyc2A7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgdG8gY3JlYXRlIGEgbmV3IHVzZXIgZ2l2ZW4gYSBVc2VyIG9iamVjdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIG5ld1VzZXIgLSBUaGUgbmV3IHVzZXIgdG8gYmUgY3JlYXRlZFxyXG4gICAqL1xyXG4gIGNyZWF0ZVVzZXIobmV3VXNlcjogVXNlcikge1xyXG4gICAgdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHRoaXMuVVNFUl9NSUNST1NFUlZJQ0UsIG5ld1VzZXIpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHIpID0+IGNvbnNvbGUubG9nKHIpKTtcclxuICB9XHJcbn1cclxuIl19