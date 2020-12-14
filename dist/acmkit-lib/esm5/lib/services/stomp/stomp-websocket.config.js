import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Environment } from '../../assets/globals';
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
    function StompUrlService() {
    }
    /**
     * Builds the broker URL.
     * @param subdomain The subdomain.
     */
    StompUrlService.prototype.buildBrokerUrl = function () {
        console.log('Socket URL:', "ws://" + Environment.RAW_URL + "/api/web-notification-app/websocket");
        return "ws://" + Environment.RAW_URL + "/api/web-notification-app/websocket";
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvbXAtd2Vic29ja2V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RvbXAvc3RvbXAtd2Vic29ja2V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQTRCO0lBQ3pELGdCQUFnQjtJQUNoQixTQUFTLEVBQUUsRUFBRTtJQUViLDBCQUEwQjtJQUMxQixnREFBZ0Q7SUFDaEQsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixpQkFBaUIsRUFBRSxLQUFLO0lBRXhCLHdEQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGNBQWMsRUFBRSxJQUFJO0NBQ3JCLENBQUM7QUFHRjtJQUNFO0lBQWUsQ0FBQztJQUNoQjs7O09BR0c7SUFDSCx3Q0FBYyxHQUFkO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FDVCxhQUFhLEVBQ2IsVUFBUSxXQUFXLENBQUMsT0FBTyx3Q0FBcUMsQ0FDakUsQ0FBQztRQUNGLE9BQU8sVUFBUSxXQUFXLENBQUMsT0FBTyx3Q0FBcUMsQ0FBQztJQUMxRSxDQUFDO0lBWlUsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlLENBYTNCO0lBQUQsc0JBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxlQUFlO0FBZTVCOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLFVBQ2hDLGVBQWdDO0lBRWhDLDZCQUNLLGtCQUFrQixLQUNyQixTQUFTLEVBQUUsZUFBZSxDQUFDLGNBQWMsRUFBRSxJQUMzQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZVJ4U3RvbXBDb25maWcgfSBmcm9tICdAc3RvbXAvbmcyLXN0b21wanMnO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Fzc2V0cy9nbG9iYWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RvbXBDb25maWc6IEluamVjdGFibGVSeFN0b21wQ29uZmlnID0ge1xyXG4gIC8vIFdoaWNoIHNlcnZlcj9cclxuICBicm9rZXJVUkw6ICcnLFxyXG5cclxuICAvLyBIb3cgb2Z0ZW4gdG8gaGVhcnRiZWF0P1xyXG4gIC8vIEludGVydmFsIGluIG1pbGxpc2Vjb25kcywgc2V0IHRvIDAgdG8gZGlzYWJsZVxyXG4gIGhlYXJ0YmVhdEluY29taW5nOiAyMDAwMCwgLy8gVHlwaWNhbCB2YWx1ZSAwIC0gZGlzYWJsZWRcclxuICBoZWFydGJlYXRPdXRnb2luZzogMjAwMDAsIC8vIFR5cGljYWwgdmFsdWUgMjAwMDAgLSBldmVyeSAyMCBzZWNvbmRzXHJcblxyXG4gIC8vIFdhaXQgaW4gbWlsbGlzZWNvbmRzIGJlZm9yZSBhdHRlbXB0aW5nIGF1dG8gcmVjb25uZWN0XHJcbiAgLy8gU2V0IHRvIDAgdG8gZGlzYWJsZVxyXG4gIC8vIFR5cGljYWwgdmFsdWUgNTAwICg1MDAgbWlsbGkgc2Vjb25kcylcclxuICByZWNvbm5lY3REZWxheTogNTAwMCxcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0b21wVXJsU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyB0aGUgYnJva2VyIFVSTC5cclxuICAgKiBAcGFyYW0gc3ViZG9tYWluIFRoZSBzdWJkb21haW4uXHJcbiAgICovXHJcbiAgYnVpbGRCcm9rZXJVcmwoKTogc3RyaW5nIHtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAnU29ja2V0IFVSTDonLFxyXG4gICAgICBgd3M6Ly8ke0Vudmlyb25tZW50LlJBV19VUkx9L2FwaS93ZWItbm90aWZpY2F0aW9uLWFwcC93ZWJzb2NrZXRgXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGB3czovLyR7RW52aXJvbm1lbnQuUkFXX1VSTH0vYXBpL3dlYi1ub3RpZmljYXRpb24tYXBwL3dlYnNvY2tldGA7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQSBmYWN0b3J5IGZvciBjcmVhdGluZyBhbiBJbmplY3RhYmxlUnhTdG9tcENvbmZpZyBmb3IgdXNlIHdpdGggSW5zaXRlIG5vdGlmaWNhdGlvbnMuXHJcbiAqIEBwYXJhbSBzdG9tcFVybFNlcnZpY2UgVGhlIFNUT01QIFVSTCBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RvbXBDb25maWdGYWN0b3J5ID0gKFxyXG4gIHN0b21wVXJsU2VydmljZTogU3RvbXBVcmxTZXJ2aWNlXHJcbik6IEluamVjdGFibGVSeFN0b21wQ29uZmlnID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4uZGVmYXVsdFN0b21wQ29uZmlnLFxyXG4gICAgYnJva2VyVVJMOiBzdG9tcFVybFNlcnZpY2UuYnVpbGRCcm9rZXJVcmwoKSxcclxuICB9O1xyXG59O1xyXG4iXX0=