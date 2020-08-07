import { __extends } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AbstractTestBed } from './abstract-test-bed';
var AcmKitTestBed = /** @class */ (function (_super) {
    __extends(AcmKitTestBed, _super);
    function AcmKitTestBed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AcmKitTestBed.getModuleMetaData = function () {
        return {
            imports: [RouterTestingModule, CommonModule, HttpClientTestingModule],
            declarations: [],
        };
    };
    return AcmKitTestBed;
}(AbstractTestBed));
export { AcmKitTestBed };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNtLWtpdC10ZXN0LWJlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjbWtpdC1saWIvIiwic291cmNlcyI6WyJsaWIvdGVzdGluZy9hY20ta2l0LXRlc3QtYmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXREO0lBQW1DLGlDQUFlO0lBQWxEOztJQU9BLENBQUM7SUFOUSwrQkFBaUIsR0FBeEI7UUFDRSxPQUFPO1lBQ0wsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixDQUFDO1lBQ3JFLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBbUMsZUFBZSxHQU9qRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRUZXN0aW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAvdGVzdGluZyc7XHJcbmltcG9ydCB7IFRlc3RNb2R1bGVNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XHJcbmltcG9ydCB7IFJvdXRlclRlc3RpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvdGVzdGluZyc7XHJcbmltcG9ydCB7IEFic3RyYWN0VGVzdEJlZCB9IGZyb20gJy4vYWJzdHJhY3QtdGVzdC1iZWQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjbUtpdFRlc3RCZWQgZXh0ZW5kcyBBYnN0cmFjdFRlc3RCZWQge1xyXG4gIHN0YXRpYyBnZXRNb2R1bGVNZXRhRGF0YSgpOiBUZXN0TW9kdWxlTWV0YWRhdGEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW1wb3J0czogW1JvdXRlclRlc3RpbmdNb2R1bGUsIENvbW1vbk1vZHVsZSwgSHR0cENsaWVudFRlc3RpbmdNb2R1bGVdLFxyXG4gICAgICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19