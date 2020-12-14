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
        console.log(Environment.SOCKET_URL);
        return Environment.SOCKET_URL;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvbXAtd2Vic29ja2V0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RvbXAvc3RvbXAtd2Vic29ja2V0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQTRCO0lBQ3pELGdCQUFnQjtJQUNoQixTQUFTLEVBQUUsRUFBRTtJQUViLDBCQUEwQjtJQUMxQixnREFBZ0Q7SUFDaEQsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixpQkFBaUIsRUFBRSxLQUFLO0lBRXhCLHdEQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGNBQWMsRUFBRSxJQUFJO0NBQ3JCLENBQUM7QUFHRjtJQUNFO0lBQWUsQ0FBQztJQUNoQjs7O09BR0c7SUFDSCx3Q0FBYyxHQUFkO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ2hDLENBQUM7SUFUVSxlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWUsQ0FVM0I7SUFBRCxzQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGVBQWU7QUFZNUI7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsVUFDaEMsZUFBZ0M7SUFFaEMsNkJBQ0ssa0JBQWtCLEtBQ3JCLFNBQVMsRUFBRSxlQUFlLENBQUMsY0FBYyxFQUFFLElBQzNDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlUnhTdG9tcENvbmZpZyB9IGZyb20gJ0BzdG9tcC9uZzItc3RvbXBqcyc7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vYXNzZXRzL2dsb2JhbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdG9tcENvbmZpZzogSW5qZWN0YWJsZVJ4U3RvbXBDb25maWcgPSB7XHJcbiAgLy8gV2hpY2ggc2VydmVyP1xyXG4gIGJyb2tlclVSTDogJycsXHJcblxyXG4gIC8vIEhvdyBvZnRlbiB0byBoZWFydGJlYXQ/XHJcbiAgLy8gSW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzLCBzZXQgdG8gMCB0byBkaXNhYmxlXHJcbiAgaGVhcnRiZWF0SW5jb21pbmc6IDIwMDAwLCAvLyBUeXBpY2FsIHZhbHVlIDAgLSBkaXNhYmxlZFxyXG4gIGhlYXJ0YmVhdE91dGdvaW5nOiAyMDAwMCwgLy8gVHlwaWNhbCB2YWx1ZSAyMDAwMCAtIGV2ZXJ5IDIwIHNlY29uZHNcclxuXHJcbiAgLy8gV2FpdCBpbiBtaWxsaXNlY29uZHMgYmVmb3JlIGF0dGVtcHRpbmcgYXV0byByZWNvbm5lY3RcclxuICAvLyBTZXQgdG8gMCB0byBkaXNhYmxlXHJcbiAgLy8gVHlwaWNhbCB2YWx1ZSA1MDAgKDUwMCBtaWxsaSBzZWNvbmRzKVxyXG4gIHJlY29ubmVjdERlbGF5OiA1MDAwLFxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RvbXBVcmxTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIHRoZSBicm9rZXIgVVJMLlxyXG4gICAqIEBwYXJhbSBzdWJkb21haW4gVGhlIHN1YmRvbWFpbi5cclxuICAgKi9cclxuICBidWlsZEJyb2tlclVybCgpOiBzdHJpbmcge1xyXG4gICAgY29uc29sZS5sb2coRW52aXJvbm1lbnQuU09DS0VUX1VSTCk7XHJcbiAgICByZXR1cm4gRW52aXJvbm1lbnQuU09DS0VUX1VSTDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGZhY3RvcnkgZm9yIGNyZWF0aW5nIGFuIEluamVjdGFibGVSeFN0b21wQ29uZmlnIGZvciB1c2Ugd2l0aCBJbnNpdGUgbm90aWZpY2F0aW9ucy5cclxuICogQHBhcmFtIHN0b21wVXJsU2VydmljZSBUaGUgU1RPTVAgVVJMIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdG9tcENvbmZpZ0ZhY3RvcnkgPSAoXHJcbiAgc3RvbXBVcmxTZXJ2aWNlOiBTdG9tcFVybFNlcnZpY2VcclxuKTogSW5qZWN0YWJsZVJ4U3RvbXBDb25maWcgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5kZWZhdWx0U3RvbXBDb25maWcsXHJcbiAgICBicm9rZXJVUkw6IHN0b21wVXJsU2VydmljZS5idWlsZEJyb2tlclVybCgpLFxyXG4gIH07XHJcbn07XHJcbiJdfQ==