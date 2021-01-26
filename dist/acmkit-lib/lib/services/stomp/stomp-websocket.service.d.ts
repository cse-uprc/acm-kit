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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StompWebsocketService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<StompWebsocketService>;
}
/**
 * Factory to create an setup the StompWebsocketService.
 * @param authService The AuthService
 */
export declare const stompWebsocketServiceFactory: (stompConfig: InjectableRxStompConfig) => StompWebsocketService;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvbXAtd2Vic29ja2V0LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsic3RvbXAtd2Vic29ja2V0LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNZXNzYWdlIH0gZnJvbSAnQHN0b21wL3N0b21wanMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN0b21wTWVzc2FnZSB9IGZyb20gJy4vc3RvbXAtd2Vic29ja2V0Lm1vZGVsJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZVJ4U3RvbXBDb25maWcsIFJ4U3RvbXBTZXJ2aWNlIH0gZnJvbSAnQHN0b21wL25nMi1zdG9tcGpzJztcclxuLyoqXHJcbiAqIFN0b21wIFNlcnZpY2VcclxuICpcclxuICogQGF1dGhvciBTYW0gQnV0bGVyXHJcbiAqIEBzaW5jZSBBdWd1c3QgMzEsIDIwMjBcclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0b21wV2Vic29ja2V0U2VydmljZSBleHRlbmRzIFJ4U3RvbXBTZXJ2aWNlIHtcclxuICAgIGlzQWN0aXZhdGVkOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoKTtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhdGUgdGhlIGNvbm5lY3Rpb24gd2l0aCB0aGUgYnJva2VyLlxyXG4gICAgICogSWYgdGhlIGNvbm5lY3Rpb24gYnJlYWtzLCBhcyBwZXIgcmVjb25uZWN0RGVsYXksaXQgd2lsbCBrZWVwIHRyeWluZyB0byByZWNvbm5lY3QuXHJcbiAgICAgKi9cclxuICAgIGFjdGl2YXRlKCk6IHZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIERpc2Nvbm5lY3QgaWYgY29ubmVjdGVkIGFuZCBzdG9wIGF1dG8gcmVjb25uZWN0IGxvb3AuXHJcbiAgICAgKiBBcHByb3ByaWF0ZSBjYWxsYmFja3Mgd2lsbCBiZSBpbnZva2VkIGlmIHVuZGVybHlpbmcgU1RPTVAgY29ubmVjdGlvbiB3YXMgY29ubmVjdGVkLlxyXG4gICAgICpcclxuICAgICAqIFRvIHJlYWN0aXZhdGUgeW91IGNhbiBjYWxsIGFjdGl2YXRlLlxyXG4gICAgICovXHJcbiAgICBkZWFjdGl2YXRlKCk6IHZvaWQ7XHJcbiAgICB3YXRjaDxUPihkZXN0aW5hdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxTdG9tcE1lc3NhZ2U8VD4+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgYW4gSU1lc3NhZ2UgaW50byBhbiBTdG9tcE1lc3NhZ2UuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwYXJzZVxyXG4gICAgICovXHJcbiAgICBwYXJzZTxUPihtZXNzYWdlOiBJTWVzc2FnZSk6IFN0b21wTWVzc2FnZTxUPjtcclxufVxyXG4vKipcclxuICogRmFjdG9yeSB0byBjcmVhdGUgYW4gc2V0dXAgdGhlIFN0b21wV2Vic29ja2V0U2VydmljZS5cclxuICogQHBhcmFtIGF1dGhTZXJ2aWNlIFRoZSBBdXRoU2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY29uc3Qgc3RvbXBXZWJzb2NrZXRTZXJ2aWNlRmFjdG9yeTogKHN0b21wQ29uZmlnOiBJbmplY3RhYmxlUnhTdG9tcENvbmZpZykgPT4gU3RvbXBXZWJzb2NrZXRTZXJ2aWNlO1xyXG4iXX0=