import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
/**
 * URL Service
 *
 * @author Sam Butler
 * @since Dec 15, 2020
 */
var ToastService = /** @class */ (function () {
    function ToastService(toastr) {
        this.toastr = toastr;
    }
    ToastService.prototype.createSuccess = function (message, title, timeout) {
        if (timeout) {
            this.toastr.success(message, title, {
                timeOut: timeout,
            });
        }
        else {
            this.toastr.success(message, title);
        }
    };
    ToastService.prototype.createError = function (message, title, timeout) {
        if (timeout) {
            this.toastr.error(message, title, {
                timeOut: timeout,
            });
        }
        else {
            this.toastr.error(message, title);
        }
    };
    ToastService.prototype.createWarning = function (message, title, timeout) {
        if (timeout) {
            this.toastr.warning(message, title, {
                timeOut: timeout,
            });
        }
        else {
            this.toastr.warning(message, title);
        }
    };
    ToastService.ctorParameters = function () { return [
        { type: ToastrService }
    ]; };
    ToastService = __decorate([
        Injectable()
    ], ToastService);
    return ToastService;
}());
export { ToastService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdG9hc3QvdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTNDOzs7OztHQUtHO0FBRUg7SUFDRSxzQkFBNkIsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7SUFFdEQsb0NBQWEsR0FBYixVQUFjLE9BQWUsRUFBRSxLQUFjLEVBQUUsT0FBZ0I7UUFDN0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO2dCQUNsQyxPQUFPLEVBQUUsT0FBTzthQUNqQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxPQUFlLEVBQUUsS0FBYyxFQUFFLE9BQWdCO1FBQzNELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtnQkFDaEMsT0FBTyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsT0FBZSxFQUFFLEtBQWMsRUFBRSxPQUFnQjtRQUM3RCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7Z0JBQ2xDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOztnQkE5Qm9DLGFBQWE7O0lBRHZDLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWSxDQWdDeEI7SUFBRCxtQkFBQztDQUFBLEFBaENELElBZ0NDO1NBaENZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcclxuXHJcbi8qKlxyXG4gKiBVUkwgU2VydmljZVxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIERlYyAxNSwgMjAyMFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRvYXN0cjogVG9hc3RyU2VydmljZSkge31cclxuXHJcbiAgY3JlYXRlU3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKSB7XHJcbiAgICBpZiAodGltZW91dCkge1xyXG4gICAgICB0aGlzLnRvYXN0ci5zdWNjZXNzKG1lc3NhZ2UsIHRpdGxlLCB7XHJcbiAgICAgICAgdGltZU91dDogdGltZW91dCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvYXN0ci5zdWNjZXNzKG1lc3NhZ2UsIHRpdGxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpIHtcclxuICAgIGlmICh0aW1lb3V0KSB7XHJcbiAgICAgIHRoaXMudG9hc3RyLmVycm9yKG1lc3NhZ2UsIHRpdGxlLCB7XHJcbiAgICAgICAgdGltZU91dDogdGltZW91dCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvYXN0ci5lcnJvcihtZXNzYWdlLCB0aXRsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVXYXJuaW5nKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpIHtcclxuICAgIGlmICh0aW1lb3V0KSB7XHJcbiAgICAgIHRoaXMudG9hc3RyLndhcm5pbmcobWVzc2FnZSwgdGl0bGUsIHtcclxuICAgICAgICB0aW1lT3V0OiB0aW1lb3V0LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG9hc3RyLndhcm5pbmcobWVzc2FnZSwgdGl0bGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=