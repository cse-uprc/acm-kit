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
var UserService = /** @class */ (function () {
    function UserService(http, urlService, router) {
        this.http = http;
        this.urlService = urlService;
        this.router = router;
    }
    /**
     * Method to create a new user given a User object
     *
     * @param newUser - The new user to be created
     */
    UserService.prototype.createUser = function (newUser) {
        var _this = this;
        this.http
            .post(this.urlService.getAPIUrl() + "/api/acm/users", newUser)
            .subscribe(function (r) { return _this.router.navigate(['/landing']); });
    };
    UserService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: UrlService },
        { type: Router }
    ]; };
    UserService = __decorate([
        Injectable()
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6Qzs7Ozs7R0FLRztBQUVIO0lBQ0UscUJBQ1UsSUFBZ0IsRUFDaEIsVUFBc0IsRUFDdEIsTUFBYztRQUZkLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFFSjs7OztPQUlHO0lBQ0gsZ0NBQVUsR0FBVixVQUFXLE9BQWE7UUFBeEIsaUJBSUM7UUFIQyxJQUFJLENBQUMsSUFBSTthQUNOLElBQUksQ0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxtQkFBZ0IsRUFBRSxPQUFPLENBQUM7YUFDN0QsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBZGUsVUFBVTtnQkFDSixVQUFVO2dCQUNkLE1BQU07O0lBSmIsV0FBVztRQUR2QixVQUFVLEVBQUU7T0FDQSxXQUFXLENBaUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FqQlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgVXJsU2VydmljZSB9IGZyb20gJy4uL3VybC91cmwuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG4vKipcclxuICogVXNlciBTZXJ2aWNlIGNsYXNzIHRoYXQgZGVhbCB3aXRoIHRoZSB1c2VyIG1pY3Jvc2VydmljZVxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIEF1Z3VzdCAzMSwgMjAyMFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSB1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICkge31cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyB1c2VyIGdpdmVuIGEgVXNlciBvYmplY3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSBuZXdVc2VyIC0gVGhlIG5ldyB1c2VyIHRvIGJlIGNyZWF0ZWRcclxuICAgKi9cclxuICBjcmVhdGVVc2VyKG5ld1VzZXI6IFVzZXIpIHtcclxuICAgIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdChgJHt0aGlzLnVybFNlcnZpY2UuZ2V0QVBJVXJsKCl9L2FwaS9hY20vdXNlcnNgLCBuZXdVc2VyKVxyXG4gICAgICAuc3Vic2NyaWJlKChyKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sYW5kaW5nJ10pKTtcclxuICB9XHJcbn1cclxuIl19