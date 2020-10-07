import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../assets/globals';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let UserService = 
/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
class UserService {
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
UserService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(i0.ɵɵinject(i1.HttpClient)); }, token: UserService, providedIn: "root" });
UserService = __decorate([
    Injectable({
        providedIn: 'root',
    })
    /**
     * User Service class that deal with the user microservice
     *
     * @author Sam Butler
     * @since August 31, 2020
     */
], UserService);
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXbkQsSUFBYSxXQUFXO0FBTnhCOzs7OztHQUtHO0FBQ0gsTUFBYSxXQUFXO0lBR3RCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGNUIsU0FBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDM0Isc0JBQWlCLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztJQUNsQixDQUFDO0lBRXhDOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsT0FBYTtRQUN0QixJQUFJLENBQUMsSUFBSTthQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRixDQUFBOztZQVoyQixVQUFVOzs7QUFIekIsV0FBVztJQVR2QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBQ0Y7Ozs7O09BS0c7R0FDVSxXQUFXLENBZXZCO1NBZlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9hc3NldHMvZ2xvYmFscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG4vKipcclxuICogVXNlciBTZXJ2aWNlIGNsYXNzIHRoYXQgZGVhbCB3aXRoIHRoZSB1c2VyIG1pY3Jvc2VydmljZVxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIEF1Z3VzdCAzMSwgMjAyMFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBwcml2YXRlIEJBU0UgPSBFbnZpcm9ubWVudC5BUElfVVJMO1xyXG4gIHByaXZhdGUgVVNFUl9NSUNST1NFUlZJQ0UgPSBgJHt0aGlzLkJBU0V9L2FwaS9hY20vdXNlcnNgO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyB1c2VyIGdpdmVuIGEgVXNlciBvYmplY3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSBuZXdVc2VyIC0gVGhlIG5ldyB1c2VyIHRvIGJlIGNyZWF0ZWRcclxuICAgKi9cclxuICBjcmVhdGVVc2VyKG5ld1VzZXI6IFVzZXIpIHtcclxuICAgIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh0aGlzLlVTRVJfTUlDUk9TRVJWSUNFLCBuZXdVc2VyKVxyXG4gICAgICAuc3Vic2NyaWJlKChyKSA9PiBjb25zb2xlLmxvZyhyKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==