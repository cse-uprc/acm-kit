import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import { stompConfigFactory, StompUrlService } from './stomp-websocket.config';
import { StompWebsocketService, stompWebsocketServiceFactory, } from './stomp-websocket.service';
const ɵ0 = stompWebsocketServiceFactory, ɵ1 = stompConfigFactory;
let StompWebsocketModule = class StompWebsocketModule {
};
StompWebsocketModule = __decorate([
    NgModule({
        providers: [
            StompUrlService,
            {
                provide: StompWebsocketService,
                useFactory: ɵ0,
                deps: [InjectableRxStompConfig],
            },
            {
                provide: InjectableRxStompConfig,
                useFactory: ɵ1,
                deps: [StompUrlService],
            },
        ],
    })
], StompWebsocketModule);
export { StompWebsocketModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvbXAtd2Vic29ja2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3RvbXAvc3RvbXAtd2Vic29ja2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0UsT0FBTyxFQUNMLHFCQUFxQixFQUNyQiw0QkFBNEIsR0FDN0IsTUFBTSwyQkFBMkIsQ0FBQztXQU9qQiw0QkFBNEIsT0FLNUIsa0JBQWtCO0FBS3BDLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0NBQUcsQ0FBQTtBQUF2QixvQkFBb0I7SUFmaEMsUUFBUSxDQUFDO1FBQ1IsU0FBUyxFQUFFO1lBQ1QsZUFBZTtZQUNmO2dCQUNFLE9BQU8sRUFBRSxxQkFBcUI7Z0JBQzlCLFVBQVUsSUFBOEI7Z0JBQ3hDLElBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ2hDO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHVCQUF1QjtnQkFDaEMsVUFBVSxJQUFvQjtnQkFDOUIsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQ3hCO1NBQ0Y7S0FDRixDQUFDO0dBQ1csb0JBQW9CLENBQUc7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZVJ4U3RvbXBDb25maWcgfSBmcm9tICdAc3RvbXAvbmcyLXN0b21wanMnO1xyXG5cclxuaW1wb3J0IHsgc3RvbXBDb25maWdGYWN0b3J5LCBTdG9tcFVybFNlcnZpY2UgfSBmcm9tICcuL3N0b21wLXdlYnNvY2tldC5jb25maWcnO1xyXG5pbXBvcnQge1xyXG4gIFN0b21wV2Vic29ja2V0U2VydmljZSxcclxuICBzdG9tcFdlYnNvY2tldFNlcnZpY2VGYWN0b3J5LFxyXG59IGZyb20gJy4vc3RvbXAtd2Vic29ja2V0LnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFN0b21wVXJsU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogU3RvbXBXZWJzb2NrZXRTZXJ2aWNlLFxyXG4gICAgICB1c2VGYWN0b3J5OiBzdG9tcFdlYnNvY2tldFNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbSW5qZWN0YWJsZVJ4U3RvbXBDb25maWddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogSW5qZWN0YWJsZVJ4U3RvbXBDb25maWcsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IHN0b21wQ29uZmlnRmFjdG9yeSxcclxuICAgICAgZGVwczogW1N0b21wVXJsU2VydmljZV0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdG9tcFdlYnNvY2tldE1vZHVsZSB7fVxyXG4iXX0=