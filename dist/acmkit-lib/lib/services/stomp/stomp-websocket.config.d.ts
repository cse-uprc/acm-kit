import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import { UrlService } from '../url/url.service';
export declare const defaultStompConfig: InjectableRxStompConfig;
export declare class StompUrlService {
    private urlService;
    constructor(urlService: UrlService);
    /**
     * Builds the broker URL.
     * @param subdomain The subdomain.
     */
    buildBrokerUrl(): string;
}
/**
 * A factory for creating an InjectableRxStompConfig for use with Insite notifications.
 * @param stompUrlService The STOMP URL service
 */
export declare const stompConfigFactory: (stompUrlService: StompUrlService) => InjectableRxStompConfig;
