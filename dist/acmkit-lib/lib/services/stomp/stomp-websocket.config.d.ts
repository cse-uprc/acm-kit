import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import { UrlService } from '../url/url.service';
import * as ɵngcc0 from '@angular/core';
export declare const defaultStompConfig: InjectableRxStompConfig;
export declare class StompUrlService {
    private urlService;
    constructor(urlService: UrlService);
    /**
     * Builds the broker URL.
     * @param subdomain The subdomain.
     */
    buildBrokerUrl(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StompUrlService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<StompUrlService>;
}
/**
 * A factory for creating an InjectableRxStompConfig for use with Insite notifications.
 * @param stompUrlService The STOMP URL service
 */
export declare const stompConfigFactory: (stompUrlService: StompUrlService) => InjectableRxStompConfig;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvbXAtd2Vic29ja2V0LmNvbmZpZy5kLnRzIiwic291cmNlcyI6WyJzdG9tcC13ZWJzb2NrZXQuY29uZmlnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGVSeFN0b21wQ29uZmlnIH0gZnJvbSAnQHN0b21wL25nMi1zdG9tcGpzJztcclxuaW1wb3J0IHsgVXJsU2VydmljZSB9IGZyb20gJy4uL3VybC91cmwuc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IGRlZmF1bHRTdG9tcENvbmZpZzogSW5qZWN0YWJsZVJ4U3RvbXBDb25maWc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0b21wVXJsU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHVybFNlcnZpY2U7XHJcbiAgICBjb25zdHJ1Y3Rvcih1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlKTtcclxuICAgIC8qKlxyXG4gICAgICogQnVpbGRzIHRoZSBicm9rZXIgVVJMLlxyXG4gICAgICogQHBhcmFtIHN1YmRvbWFpbiBUaGUgc3ViZG9tYWluLlxyXG4gICAgICovXHJcbiAgICBidWlsZEJyb2tlclVybCgpOiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiAqIEEgZmFjdG9yeSBmb3IgY3JlYXRpbmcgYW4gSW5qZWN0YWJsZVJ4U3RvbXBDb25maWcgZm9yIHVzZSB3aXRoIEluc2l0ZSBub3RpZmljYXRpb25zLlxyXG4gKiBAcGFyYW0gc3RvbXBVcmxTZXJ2aWNlIFRoZSBTVE9NUCBVUkwgc2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3Qgc3RvbXBDb25maWdGYWN0b3J5OiAoc3RvbXBVcmxTZXJ2aWNlOiBTdG9tcFVybFNlcnZpY2UpID0+IEluamVjdGFibGVSeFN0b21wQ29uZmlnO1xyXG4iXX0=