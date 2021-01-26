import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { UrlService } from '../url/url.service';
import { Router } from '@angular/router';
/**
 * User Service class that deal with the user microservice
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
import * as ɵngcc0 from '@angular/core';
export declare class UserService {
    private http;
    private urlService;
    private router;
    constructor(http: HttpClient, urlService: UrlService, router: Router);
    /**
     * Method to create a new user given a User object
     *
     * @param newUser - The new user to be created
     */
    createUser(newUser: User): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVzZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyLm1vZGVsJztcclxuaW1wb3J0IHsgVXJsU2VydmljZSB9IGZyb20gJy4uL3VybC91cmwuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8qKlxyXG4gKiBVc2VyIFNlcnZpY2UgY2xhc3MgdGhhdCBkZWFsIHdpdGggdGhlIHVzZXIgbWljcm9zZXJ2aWNlXHJcbiAqXHJcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxyXG4gKiBAc2luY2UgQXVndXN0IDMxLCAyMDIwXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGh0dHA7XHJcbiAgICBwcml2YXRlIHVybFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHJvdXRlcjtcclxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIHVybFNlcnZpY2U6IFVybFNlcnZpY2UsIHJvdXRlcjogUm91dGVyKTtcclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyB1c2VyIGdpdmVuIGEgVXNlciBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmV3VXNlciAtIFRoZSBuZXcgdXNlciB0byBiZSBjcmVhdGVkXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVVzZXIobmV3VXNlcjogVXNlcik6IHZvaWQ7XHJcbn1cclxuIl19