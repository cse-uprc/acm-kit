import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AbstractTestBed } from './abstract-test-bed';
export class AcmKitTestBed extends AbstractTestBed {
    static getModuleMetaData() {
        return {
            imports: [RouterTestingModule, CommonModule, HttpClientTestingModule],
            declarations: [],
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNtLWtpdC10ZXN0LWJlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvdGVzdGluZy9hY20ta2l0LXRlc3QtYmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsTUFBTSxPQUFPLGFBQWMsU0FBUSxlQUFlO0lBQ2hELE1BQU0sQ0FBQyxpQkFBaUI7UUFDdEIsT0FBTztZQUNMLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSx1QkFBdUIsQ0FBQztZQUNyRSxZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudFRlc3RpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cC90ZXN0aW5nJztcclxuaW1wb3J0IHsgVGVzdE1vZHVsZU1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuaW1wb3J0IHsgUm91dGVyVGVzdGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci90ZXN0aW5nJztcclxuaW1wb3J0IHsgQWJzdHJhY3RUZXN0QmVkIH0gZnJvbSAnLi9hYnN0cmFjdC10ZXN0LWJlZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWNtS2l0VGVzdEJlZCBleHRlbmRzIEFic3RyYWN0VGVzdEJlZCB7XHJcbiAgc3RhdGljIGdldE1vZHVsZU1ldGFEYXRhKCk6IFRlc3RNb2R1bGVNZXRhZGF0YSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbXBvcnRzOiBbUm91dGVyVGVzdGluZ01vZHVsZSwgQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50VGVzdGluZ01vZHVsZV0sXHJcbiAgICAgIGRlY2xhcmF0aW9uczogW10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=