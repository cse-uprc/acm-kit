import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RxStompService } from '@stomp/ng2-stompjs';
import * as i0 from "@angular/core";
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
StompWebsocketService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StompWebsocketService_Factory() { return new StompWebsocketService(); }, token: StompWebsocketService, providedIn: "root" });
StompWebsocketService = __decorate([
    Injectable({
        providedIn: 'root',
    })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvbXAtd2Vic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0b21wL3N0b21wLXdlYnNvY2tldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQTJCLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUU3RTs7Ozs7R0FLRztBQUlILElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEsY0FBYztJQUd2RDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBSFYsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFJcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBQ0Q7Ozs7O09BS0c7SUFDSCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxLQUFLLENBQUksV0FBbUI7UUFDMUIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUksT0FBaUI7UUFDeEIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoRSx1Q0FDSyxPQUFPLEtBQ1YsSUFBSSxFQUFFLFFBQVEsSUFDZDtJQUNKLENBQUM7Q0FDRixDQUFBOztBQTNDWSxxQkFBcUI7SUFIakMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHFCQUFxQixDQTJDakM7U0EzQ1kscUJBQXFCO0FBNkNsQzs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRyxDQUMxQyxXQUFvQyxFQUNiLEVBQUU7SUFDekIsTUFBTSxPQUFPLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO0lBQzVDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTWVzc2FnZSB9IGZyb20gJ0BzdG9tcC9zdG9tcGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN0b21wTWVzc2FnZSB9IGZyb20gJy4vc3RvbXAtd2Vic29ja2V0Lm1vZGVsJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZVJ4U3RvbXBDb25maWcsIFJ4U3RvbXBTZXJ2aWNlIH0gZnJvbSAnQHN0b21wL25nMi1zdG9tcGpzJztcclxuXHJcbi8qKlxyXG4gKiBTdG9tcCBTZXJ2aWNlXHJcbiAqXHJcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxyXG4gKiBAc2luY2UgQXVndXN0IDMxLCAyMDIwXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RvbXBXZWJzb2NrZXRTZXJ2aWNlIGV4dGVuZHMgUnhTdG9tcFNlcnZpY2Uge1xyXG4gIGlzQWN0aXZhdGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYXRlIHRoZSBjb25uZWN0aW9uIHdpdGggdGhlIGJyb2tlci5cclxuICAgKiBJZiB0aGUgY29ubmVjdGlvbiBicmVha3MsIGFzIHBlciByZWNvbm5lY3REZWxheSxpdCB3aWxsIGtlZXAgdHJ5aW5nIHRvIHJlY29ubmVjdC5cclxuICAgKi9cclxuICBhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0FjdGl2YXRlZCkge1xyXG4gICAgICB0aGlzLmlzQWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgc3VwZXIuYWN0aXZhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRGlzY29ubmVjdCBpZiBjb25uZWN0ZWQgYW5kIHN0b3AgYXV0byByZWNvbm5lY3QgbG9vcC5cclxuICAgKiBBcHByb3ByaWF0ZSBjYWxsYmFja3Mgd2lsbCBiZSBpbnZva2VkIGlmIHVuZGVybHlpbmcgU1RPTVAgY29ubmVjdGlvbiB3YXMgY29ubmVjdGVkLlxyXG4gICAqXHJcbiAgICogVG8gcmVhY3RpdmF0ZSB5b3UgY2FuIGNhbGwgYWN0aXZhdGUuXHJcbiAgICovXHJcbiAgZGVhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAgIHN1cGVyLmRlYWN0aXZhdGUoKTtcclxuICB9XHJcblxyXG4gIHdhdGNoPFQ+KGRlc3RpbmF0aW9uOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0b21wTWVzc2FnZTxUPj4ge1xyXG4gICAgcmV0dXJuIHN1cGVyLndhdGNoKGRlc3RpbmF0aW9uKS5waXBlKG1hcCgobWVzc2FnZSkgPT4gdGhpcy5wYXJzZShtZXNzYWdlKSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2VzIGFuIElNZXNzYWdlIGludG8gYW4gU3RvbXBNZXNzYWdlLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHBhcnNlXHJcbiAgICovXHJcbiAgcGFyc2U8VD4obWVzc2FnZTogSU1lc3NhZ2UpOiBTdG9tcE1lc3NhZ2U8VD4ge1xyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBtZXNzYWdlLmJvZHkgPyBKU09OLnBhcnNlKG1lc3NhZ2UuYm9keSkgOiBudWxsO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ubWVzc2FnZSxcclxuICAgICAgZGF0YTogaW5zdGFuY2UsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gY3JlYXRlIGFuIHNldHVwIHRoZSBTdG9tcFdlYnNvY2tldFNlcnZpY2UuXHJcbiAqIEBwYXJhbSBhdXRoU2VydmljZSBUaGUgQXV0aFNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdG9tcFdlYnNvY2tldFNlcnZpY2VGYWN0b3J5ID0gKFxyXG4gIHN0b21wQ29uZmlnOiBJbmplY3RhYmxlUnhTdG9tcENvbmZpZ1xyXG4pOiBTdG9tcFdlYnNvY2tldFNlcnZpY2UgPT4ge1xyXG4gIGNvbnN0IHNlcnZpY2UgPSBuZXcgU3RvbXBXZWJzb2NrZXRTZXJ2aWNlKCk7XHJcbiAgc2VydmljZS5jb25maWd1cmUoc3RvbXBDb25maWcpO1xyXG4gIHJldHVybiBzZXJ2aWNlO1xyXG59O1xyXG4iXX0=