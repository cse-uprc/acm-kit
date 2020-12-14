import { Injectable } from '@angular/core';
import { IMessage } from '@stomp/stompjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StompMessage } from './stomp-websocket.model';
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';

/**
 * Stomp Service
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
@Injectable({
  providedIn: 'root',
})
export class StompWebsocketService extends RxStompService {
  isActivated = false;

  constructor() {
    super();
  }

  /**
   * Initiate the connection with the broker.
   * If the connection breaks, as per reconnectDelay,it will keep trying to reconnect.
   */
  activate(): void {
    if (!this.isActivated) {
      this.isActivated = true;
      super.activate();
    }
  }
  /**
   * Disconnect if connected and stop auto reconnect loop.
   * Appropriate callbacks will be invoked if underlying STOMP connection was connected.
   *
   * To reactivate you can call activate.
   */
  deactivate(): void {
    this.isActivated = false;
    super.deactivate();
  }

  watch<T>(destination: string): Observable<StompMessage<T>> {
    return super.watch(destination).pipe(map((message) => this.parse(message)));
  }

  /**
   * Parses an IMessage into an StompMessage.
   * @param message The message to parse
   */
  parse<T>(message: IMessage): StompMessage<T> {
    const instance = message.body ? JSON.parse(message.body) : null;
    return {
      ...message,
      data: instance,
    };
  }
}

/**
 * Factory to create an setup the StompWebsocketService.
 * @param authService The AuthService
 */
export const stompWebsocketServiceFactory = (
  stompConfig: InjectableRxStompConfig
): StompWebsocketService => {
  const service = new StompWebsocketService();
  service.configure(stompConfig);
  return service;
};
