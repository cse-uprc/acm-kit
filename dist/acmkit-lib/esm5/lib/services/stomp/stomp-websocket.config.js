import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
export var defaultStompConfig = {
    // Which server?
    brokerURL: '',
    // How often to heartbeat?
    // Interval in milliseconds, set to 0 to disable
    heartbeatIncoming: 20000,
    heartbeatOutgoing: 20000,
    // Wait in milliseconds before attempting auto reconnect
    // Set to 0 to disable
    // Typical value 500 (500 milli seconds)
    reconnectDelay: 5000,
};
var StompUrlService = /** @class */ (function () {
    function StompUrlService(urlService) {
        this.urlService = urlService;
    }
    /**
     * Builds the broker URL.
     * @param subdomain The subdomain.
     */
    StompUrlService.prototype.buildBrokerUrl = function () {
        return this.urlService.getSocketPath();
    };
    StompUrlService.ctorParameters = function () { return [
        { type: UrlService }
    ]; };
    StompUrlService = __decorate([
        Injectable()
    ], StompUrlService);
    return StompUrlService;
}());
export { StompUrlService };
/**
 * A factory for creating an InjectableRxStompConfig for use with Insite notifications.
 * @param stompUrlService The STOMP URL service
 */
export var stompConfigFactory = function (stompUrlService) {
    return __assign(__assign({}, defaultStompConfig), { brokerURL: stompUrlService.buildBrokerUrl() });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvbXAtd2Vic29ja2V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RvbXAvc3RvbXAtd2Vic29ja2V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEQsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQTRCO0lBQ3pELGdCQUFnQjtJQUNoQixTQUFTLEVBQUUsRUFBRTtJQUViLDBCQUEwQjtJQUMxQixnREFBZ0Q7SUFDaEQsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixpQkFBaUIsRUFBRSxLQUFLO0lBRXhCLHdEQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGNBQWMsRUFBRSxJQUFJO0NBQ3JCLENBQUM7QUFHRjtJQUNFLHlCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUM5Qzs7O09BR0c7SUFDSCx3Q0FBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7O2dCQVArQixVQUFVOztJQUQvQixlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWUsQ0FTM0I7SUFBRCxzQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLGVBQWU7QUFXNUI7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsVUFDaEMsZUFBZ0M7SUFFaEMsNkJBQ0ssa0JBQWtCLEtBQ3JCLFNBQVMsRUFBRSxlQUFlLENBQUMsY0FBYyxFQUFFLElBQzNDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlUnhTdG9tcENvbmZpZyB9IGZyb20gJ0BzdG9tcC9uZzItc3RvbXBqcyc7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2dsb2JhbHMnO1xyXG5pbXBvcnQgeyBVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vdXJsL3VybC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RvbXBDb25maWc6IEluamVjdGFibGVSeFN0b21wQ29uZmlnID0ge1xyXG4gIC8vIFdoaWNoIHNlcnZlcj9cclxuICBicm9rZXJVUkw6ICcnLFxyXG5cclxuICAvLyBIb3cgb2Z0ZW4gdG8gaGVhcnRiZWF0P1xyXG4gIC8vIEludGVydmFsIGluIG1pbGxpc2Vjb25kcywgc2V0IHRvIDAgdG8gZGlzYWJsZVxyXG4gIGhlYXJ0YmVhdEluY29taW5nOiAyMDAwMCwgLy8gVHlwaWNhbCB2YWx1ZSAwIC0gZGlzYWJsZWRcclxuICBoZWFydGJlYXRPdXRnb2luZzogMjAwMDAsIC8vIFR5cGljYWwgdmFsdWUgMjAwMDAgLSBldmVyeSAyMCBzZWNvbmRzXHJcblxyXG4gIC8vIFdhaXQgaW4gbWlsbGlzZWNvbmRzIGJlZm9yZSBhdHRlbXB0aW5nIGF1dG8gcmVjb25uZWN0XHJcbiAgLy8gU2V0IHRvIDAgdG8gZGlzYWJsZVxyXG4gIC8vIFR5cGljYWwgdmFsdWUgNTAwICg1MDAgbWlsbGkgc2Vjb25kcylcclxuICByZWNvbm5lY3REZWxheTogNTAwMCxcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b21wVXJsU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlKSB7fVxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyB0aGUgYnJva2VyIFVSTC5cclxuICAgKiBAcGFyYW0gc3ViZG9tYWluIFRoZSBzdWJkb21haW4uXHJcbiAgICovXHJcbiAgYnVpbGRCcm9rZXJVcmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnVybFNlcnZpY2UuZ2V0U29ja2V0UGF0aCgpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZmFjdG9yeSBmb3IgY3JlYXRpbmcgYW4gSW5qZWN0YWJsZVJ4U3RvbXBDb25maWcgZm9yIHVzZSB3aXRoIEluc2l0ZSBub3RpZmljYXRpb25zLlxyXG4gKiBAcGFyYW0gc3RvbXBVcmxTZXJ2aWNlIFRoZSBTVE9NUCBVUkwgc2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0b21wQ29uZmlnRmFjdG9yeSA9IChcclxuICBzdG9tcFVybFNlcnZpY2U6IFN0b21wVXJsU2VydmljZVxyXG4pOiBJbmplY3RhYmxlUnhTdG9tcENvbmZpZyA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLmRlZmF1bHRTdG9tcENvbmZpZyxcclxuICAgIGJyb2tlclVSTDogc3RvbXBVcmxTZXJ2aWNlLmJ1aWxkQnJva2VyVXJsKCksXHJcbiAgfTtcclxufTtcclxuIl19