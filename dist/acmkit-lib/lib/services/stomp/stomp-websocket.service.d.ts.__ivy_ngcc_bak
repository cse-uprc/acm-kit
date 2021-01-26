import { IMessage } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import { StompMessage } from './stomp-websocket.model';
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';
/**
 * Stomp Service
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
export declare class StompWebsocketService extends RxStompService {
    isActivated: boolean;
    constructor();
    /**
     * Initiate the connection with the broker.
     * If the connection breaks, as per reconnectDelay,it will keep trying to reconnect.
     */
    activate(): void;
    /**
     * Disconnect if connected and stop auto reconnect loop.
     * Appropriate callbacks will be invoked if underlying STOMP connection was connected.
     *
     * To reactivate you can call activate.
     */
    deactivate(): void;
    watch<T>(destination: string): Observable<StompMessage<T>>;
    /**
     * Parses an IMessage into an StompMessage.
     * @param message The message to parse
     */
    parse<T>(message: IMessage): StompMessage<T>;
}
/**
 * Factory to create an setup the StompWebsocketService.
 * @param authService The AuthService
 */
export declare const stompWebsocketServiceFactory: (stompConfig: InjectableRxStompConfig) => StompWebsocketService;
