import { IMessage } from '@stomp/stompjs';
export interface StompMessage<T> extends IMessage {
    data: T;
}
