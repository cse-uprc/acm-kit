import { NgModule } from '@angular/core';
import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';

import { stompConfigFactory, StompUrlService } from './stomp-websocket.config';
import {
  StompWebsocketService,
  stompWebsocketServiceFactory,
} from './stomp-websocket.service';

@NgModule({
  providers: [
    StompUrlService,
    {
      provide: StompWebsocketService,
      useFactory: stompWebsocketServiceFactory,
      deps: [InjectableRxStompConfig],
    },
    {
      provide: InjectableRxStompConfig,
      useFactory: stompConfigFactory,
      deps: [StompUrlService],
    },
  ],
})
export class StompWebsocketModule {}
