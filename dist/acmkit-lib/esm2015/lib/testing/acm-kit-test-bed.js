import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AcmkitLibModule } from '../acmkit-lib.module';
import { AbstractTestBed } from './abstract-test-bed';
export class AcmKitTestBed extends AbstractTestBed {
    static getModuleMetaData() {
        return {
            imports: [
                RouterTestingModule,
                CommonModule,
                HttpClientTestingModule,
                AcmkitLibModule,
            ],
            declarations: [],
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNtLWtpdC10ZXN0LWJlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvdGVzdGluZy9hY20ta2l0LXRlc3QtYmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBZTtJQUNoRCxNQUFNLENBQUMsaUJBQWlCO1FBQ3RCLE9BQU87WUFDTCxPQUFPLEVBQUU7Z0JBQ1AsbUJBQW1CO2dCQUNuQixZQUFZO2dCQUNaLHVCQUF1QjtnQkFDdkIsZUFBZTthQUNoQjtZQUNELFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50VGVzdGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwL3Rlc3RpbmcnO1xyXG5pbXBvcnQgeyBUZXN0TW9kdWxlTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xyXG5pbXBvcnQgeyBSb3V0ZXJUZXN0aW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3Rlc3RpbmcnO1xyXG5pbXBvcnQgeyBBY21raXRMaWJNb2R1bGUgfSBmcm9tICcuLi9hY21raXQtbGliLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0VGVzdEJlZCB9IGZyb20gJy4vYWJzdHJhY3QtdGVzdC1iZWQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjbUtpdFRlc3RCZWQgZXh0ZW5kcyBBYnN0cmFjdFRlc3RCZWQge1xyXG4gIHN0YXRpYyBnZXRNb2R1bGVNZXRhRGF0YSgpOiBUZXN0TW9kdWxlTWV0YWRhdGEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgIFJvdXRlclRlc3RpbmdNb2R1bGUsXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEh0dHBDbGllbnRUZXN0aW5nTW9kdWxlLFxyXG4gICAgICAgIEFjbWtpdExpYk1vZHVsZSxcclxuICAgICAgXSxcclxuICAgICAgZGVjbGFyYXRpb25zOiBbXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==