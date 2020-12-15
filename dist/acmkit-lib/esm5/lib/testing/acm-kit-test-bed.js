import { __extends } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AcmkitLibModule } from '../acmkit-lib.module';
import { AbstractTestBed } from './abstract-test-bed';
var AcmKitTestBed = /** @class */ (function (_super) {
    __extends(AcmKitTestBed, _super);
    function AcmKitTestBed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AcmKitTestBed.getModuleMetaData = function () {
        return {
            imports: [
                RouterTestingModule,
                CommonModule,
                HttpClientTestingModule,
                AcmkitLibModule,
            ],
            declarations: [],
        };
    };
    return AcmKitTestBed;
}(AbstractTestBed));
export { AcmKitTestBed };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNtLWtpdC10ZXN0LWJlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvdGVzdGluZy9hY20ta2l0LXRlc3QtYmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RDtJQUFtQyxpQ0FBZTtJQUFsRDs7SUFZQSxDQUFDO0lBWFEsK0JBQWlCLEdBQXhCO1FBQ0UsT0FBTztZQUNMLE9BQU8sRUFBRTtnQkFDUCxtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osdUJBQXVCO2dCQUN2QixlQUFlO2FBQ2hCO1lBQ0QsWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFaRCxDQUFtQyxlQUFlLEdBWWpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudFRlc3RpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cC90ZXN0aW5nJztcclxuaW1wb3J0IHsgVGVzdE1vZHVsZU1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuaW1wb3J0IHsgUm91dGVyVGVzdGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci90ZXN0aW5nJztcclxuaW1wb3J0IHsgQWNta2l0TGliTW9kdWxlIH0gZnJvbSAnLi4vYWNta2l0LWxpYi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdFRlc3RCZWQgfSBmcm9tICcuL2Fic3RyYWN0LXRlc3QtYmVkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBY21LaXRUZXN0QmVkIGV4dGVuZHMgQWJzdHJhY3RUZXN0QmVkIHtcclxuICBzdGF0aWMgZ2V0TW9kdWxlTWV0YURhdGEoKTogVGVzdE1vZHVsZU1ldGFkYXRhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJUZXN0aW5nTW9kdWxlLFxyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50VGVzdGluZ01vZHVsZSxcclxuICAgICAgICBBY21raXRMaWJNb2R1bGUsXHJcbiAgICAgIF0sXHJcbiAgICAgIGRlY2xhcmF0aW9uczogW10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=