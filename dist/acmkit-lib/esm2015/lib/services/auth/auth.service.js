import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../../assets/globals';
/**
 * Auth service class that deals with authorizing a user
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Logs a user in and generates a JWT token for that user
     *
     * @param username - username of the user
     * @param password - password for the user
     */
    authenticate(username, password) {
        this.http
            .post(Environment.AUTH, { username, password })
            .subscribe((response) => console.log(response.token));
    }
};
AuthService.ctorParameters = () => [
    { type: HttpClient }
];
AuthService = __decorate([
    Injectable()
], AuthService);
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5EOzs7OztHQUtHO0FBRUgsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUN0QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV4Qzs7Ozs7T0FLRztJQUNILFlBQVksQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQzdDLElBQUksQ0FBQyxJQUFJO2FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDOUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLFFBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0YsQ0FBQTs7WUFiMkIsVUFBVTs7QUFEekIsV0FBVztJQUR2QixVQUFVLEVBQUU7R0FDQSxXQUFXLENBY3ZCO1NBZFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9hc3NldHMvZ2xvYmFscyc7XHJcblxyXG4vKipcclxuICogQXV0aCBzZXJ2aWNlIGNsYXNzIHRoYXQgZGVhbHMgd2l0aCBhdXRob3JpemluZyBhIHVzZXJcclxuICpcclxuICogQGF1dGhvciBTYW0gQnV0bGVyXHJcbiAqIEBzaW5jZSBBdWd1c3QgMjQsIDIwMjBcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgYSB1c2VyIGluIGFuZCBnZW5lcmF0ZXMgYSBKV1QgdG9rZW4gZm9yIHRoYXQgdXNlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVzZXJuYW1lIC0gdXNlcm5hbWUgb2YgdGhlIHVzZXJcclxuICAgKiBAcGFyYW0gcGFzc3dvcmQgLSBwYXNzd29yZCBmb3IgdGhlIHVzZXJcclxuICAgKi9cclxuICBhdXRoZW50aWNhdGUodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KEVudmlyb25tZW50LkFVVEgsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZygocmVzcG9uc2UgYXMgYW55KS50b2tlbikpO1xyXG4gIH1cclxufVxyXG4iXX0=