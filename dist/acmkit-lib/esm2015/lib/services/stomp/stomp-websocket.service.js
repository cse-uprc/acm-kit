import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RxStompService } from '@stomp/ng2-stompjs';
/**
 * Stomp Service
 *
 * @author Sam Butler
 * @since August 31, 2020
 */
let StompWebsocketService = class StompWebsocketService extends RxStompService {
    constructor() {
        super();
        this.isActivated = false;
    }
    /**
     * Initiate the connection with the broker.
     * If the connection breaks, as per reconnectDelay,it will keep trying to reconnect.
     */
    activate() {
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
    deactivate() {
        this.isActivated = false;
        super.deactivate();
    }
    watch(destination) {
        return super.watch(destination).pipe(map((message) => this.parse(message)));
    }
    /**
     * Parses an IMessage into an StompMessage.
     * @param message The message to parse
     */
    parse(message) {
        const instance = message.body ? JSON.parse(message.body) : null;
        return Object.assign(Object.assign({}, message), { data: instance });
    }
};
StompWebsocketService = __decorate([
    Injectable()
], StompWebsocketService);
export { StompWebsocketService };
/**
 * Factory to create an setup the StompWebsocketService.
 * @param authService The AuthService
 */
export const stompWebsocketServiceFactory = (stompConfig) => {
    const service = new StompWebsocketService();
    service.configure(stompConfig);
    return service;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvbXAtd2Vic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0b21wL3N0b21wLXdlYnNvY2tldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQTJCLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTdFOzs7OztHQUtHO0FBRUgsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBc0IsU0FBUSxjQUFjO0lBR3ZEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFIVixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUlwQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFDRDs7Ozs7T0FLRztJQUNILFVBQVU7UUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELEtBQUssQ0FBSSxXQUFtQjtRQUMxQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBSSxPQUFpQjtRQUN4QixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hFLHVDQUNLLE9BQU8sS0FDVixJQUFJLEVBQUUsUUFBUSxJQUNkO0lBQ0osQ0FBQztDQUNGLENBQUE7QUEzQ1kscUJBQXFCO0lBRGpDLFVBQVUsRUFBRTtHQUNBLHFCQUFxQixDQTJDakM7U0EzQ1kscUJBQXFCO0FBNkNsQzs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRyxDQUMxQyxXQUFvQyxFQUNiLEVBQUU7SUFDekIsTUFBTSxPQUFPLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO0lBQzVDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTWVzc2FnZSB9IGZyb20gJ0BzdG9tcC9zdG9tcGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN0b21wTWVzc2FnZSB9IGZyb20gJy4vc3RvbXAtd2Vic29ja2V0Lm1vZGVsJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZVJ4U3RvbXBDb25maWcsIFJ4U3RvbXBTZXJ2aWNlIH0gZnJvbSAnQHN0b21wL25nMi1zdG9tcGpzJztcclxuXHJcbi8qKlxyXG4gKiBTdG9tcCBTZXJ2aWNlXHJcbiAqXHJcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxyXG4gKiBAc2luY2UgQXVndXN0IDMxLCAyMDIwXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdG9tcFdlYnNvY2tldFNlcnZpY2UgZXh0ZW5kcyBSeFN0b21wU2VydmljZSB7XHJcbiAgaXNBY3RpdmF0ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhdGUgdGhlIGNvbm5lY3Rpb24gd2l0aCB0aGUgYnJva2VyLlxyXG4gICAqIElmIHRoZSBjb25uZWN0aW9uIGJyZWFrcywgYXMgcGVyIHJlY29ubmVjdERlbGF5LGl0IHdpbGwga2VlcCB0cnlpbmcgdG8gcmVjb25uZWN0LlxyXG4gICAqL1xyXG4gIGFjdGl2YXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzQWN0aXZhdGVkKSB7XHJcbiAgICAgIHRoaXMuaXNBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICBzdXBlci5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBEaXNjb25uZWN0IGlmIGNvbm5lY3RlZCBhbmQgc3RvcCBhdXRvIHJlY29ubmVjdCBsb29wLlxyXG4gICAqIEFwcHJvcHJpYXRlIGNhbGxiYWNrcyB3aWxsIGJlIGludm9rZWQgaWYgdW5kZXJseWluZyBTVE9NUCBjb25uZWN0aW9uIHdhcyBjb25uZWN0ZWQuXHJcbiAgICpcclxuICAgKiBUbyByZWFjdGl2YXRlIHlvdSBjYW4gY2FsbCBhY3RpdmF0ZS5cclxuICAgKi9cclxuICBkZWFjdGl2YXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0FjdGl2YXRlZCA9IGZhbHNlO1xyXG4gICAgc3VwZXIuZGVhY3RpdmF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgd2F0Y2g8VD4oZGVzdGluYXRpb246IHN0cmluZyk6IE9ic2VydmFibGU8U3RvbXBNZXNzYWdlPFQ+PiB7XHJcbiAgICByZXR1cm4gc3VwZXIud2F0Y2goZGVzdGluYXRpb24pLnBpcGUobWFwKChtZXNzYWdlKSA9PiB0aGlzLnBhcnNlKG1lc3NhZ2UpKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYXJzZXMgYW4gSU1lc3NhZ2UgaW50byBhbiBTdG9tcE1lc3NhZ2UuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcGFyc2VcclxuICAgKi9cclxuICBwYXJzZTxUPihtZXNzYWdlOiBJTWVzc2FnZSk6IFN0b21wTWVzc2FnZTxUPiB7XHJcbiAgICBjb25zdCBpbnN0YW5jZSA9IG1lc3NhZ2UuYm9keSA/IEpTT04ucGFyc2UobWVzc2FnZS5ib2R5KSA6IG51bGw7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5tZXNzYWdlLFxyXG4gICAgICBkYXRhOiBpbnN0YW5jZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRmFjdG9yeSB0byBjcmVhdGUgYW4gc2V0dXAgdGhlIFN0b21wV2Vic29ja2V0U2VydmljZS5cclxuICogQHBhcmFtIGF1dGhTZXJ2aWNlIFRoZSBBdXRoU2VydmljZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0b21wV2Vic29ja2V0U2VydmljZUZhY3RvcnkgPSAoXHJcbiAgc3RvbXBDb25maWc6IEluamVjdGFibGVSeFN0b21wQ29uZmlnXHJcbik6IFN0b21wV2Vic29ja2V0U2VydmljZSA9PiB7XHJcbiAgY29uc3Qgc2VydmljZSA9IG5ldyBTdG9tcFdlYnNvY2tldFNlcnZpY2UoKTtcclxuICBzZXJ2aWNlLmNvbmZpZ3VyZShzdG9tcENvbmZpZyk7XHJcbiAgcmV0dXJuIHNlcnZpY2U7XHJcbn07XHJcbiJdfQ==