import { Injectable } from '@angular/core';
import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import { Environment } from '../../assets/globals';

export const defaultStompConfig: InjectableRxStompConfig = {
  // Which server?
  brokerURL: '',

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeatIncoming: 20000, // Typical value 0 - disabled
  heartbeatOutgoing: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 500 (500 milli seconds)
  reconnectDelay: 5000,
};

@Injectable()
export class StompUrlService {
  constructor() {}
  /**
   * Builds the broker URL.
   * @param subdomain The subdomain.
   */
  buildBrokerUrl(): string {
    console.log(
      'Socket URL:',
      `ws://${Environment.RAW_URL}/api/web-notification-app/websocket`
    );
    return `ws://${Environment.RAW_URL}/api/web-notification-app/websocket`;
  }
}

/**
 * A factory for creating an InjectableRxStompConfig for use with Insite notifications.
 * @param stompUrlService The STOMP URL service
 */
export const stompConfigFactory = (
  stompUrlService: StompUrlService
): InjectableRxStompConfig => {
  return {
    ...defaultStompConfig,
    brokerURL: stompUrlService.buildBrokerUrl(),
  };
};
