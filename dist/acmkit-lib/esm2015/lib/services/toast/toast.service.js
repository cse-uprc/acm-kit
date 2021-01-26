import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
/**
 * URL Service
 *
 * @author Sam Butler
 * @since Dec 15, 2020
 */
let ToastService = class ToastService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    createSuccess(message, title, timeout) {
        if (timeout) {
            this.toastr.success(message, title, {
                timeOut: timeout,
            });
        }
        else {
            this.toastr.success(message, title);
        }
    }
    createError(message, title, timeout) {
        if (timeout) {
            this.toastr.error(message, title, {
                timeOut: timeout,
            });
        }
        else {
            this.toastr.error(message, title);
        }
    }
    createWarning(message, title, timeout) {
        if (timeout) {
            this.toastr.warning(message, title, {
                timeOut: timeout,
            });
        }
        else {
            this.toastr.warning(message, title);
        }
    }
};
ToastService.ctorParameters = () => [
    { type: ToastrService }
];
ToastService = __decorate([
    Injectable()
], ToastService);
export { ToastService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdG9hc3QvdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTNDOzs7OztHQUtHO0FBRUgsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUN2QixZQUE2QixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQUcsQ0FBQztJQUV0RCxhQUFhLENBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxPQUFnQjtRQUM3RCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7Z0JBQ2xDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQWUsRUFBRSxLQUFjLEVBQUUsT0FBZ0I7UUFDM0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO2dCQUNoQyxPQUFPLEVBQUUsT0FBTzthQUNqQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLE9BQWdCO1FBQzdELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtnQkFDbEMsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Q0FDRixDQUFBOztZQS9Cc0MsYUFBYTs7QUFEdkMsWUFBWTtJQUR4QixVQUFVLEVBQUU7R0FDQSxZQUFZLENBZ0N4QjtTQWhDWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvYXN0cic7XHJcblxyXG4vKipcclxuICogVVJMIFNlcnZpY2VcclxuICpcclxuICogQGF1dGhvciBTYW0gQnV0bGVyXHJcbiAqIEBzaW5jZSBEZWMgMTUsIDIwMjBcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0b2FzdHI6IFRvYXN0clNlcnZpY2UpIHt9XHJcblxyXG4gIGNyZWF0ZVN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgdGltZW91dD86IG51bWJlcikge1xyXG4gICAgaWYgKHRpbWVvdXQpIHtcclxuICAgICAgdGhpcy50b2FzdHIuc3VjY2VzcyhtZXNzYWdlLCB0aXRsZSwge1xyXG4gICAgICAgIHRpbWVPdXQ6IHRpbWVvdXQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b2FzdHIuc3VjY2VzcyhtZXNzYWdlLCB0aXRsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKSB7XHJcbiAgICBpZiAodGltZW91dCkge1xyXG4gICAgICB0aGlzLnRvYXN0ci5lcnJvcihtZXNzYWdlLCB0aXRsZSwge1xyXG4gICAgICAgIHRpbWVPdXQ6IHRpbWVvdXQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b2FzdHIuZXJyb3IobWVzc2FnZSwgdGl0bGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlV2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKSB7XHJcbiAgICBpZiAodGltZW91dCkge1xyXG4gICAgICB0aGlzLnRvYXN0ci53YXJuaW5nKG1lc3NhZ2UsIHRpdGxlLCB7XHJcbiAgICAgICAgdGltZU91dDogdGltZW91dCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvYXN0ci53YXJuaW5nKG1lc3NhZ2UsIHRpdGxlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19