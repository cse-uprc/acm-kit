import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { AngularTestTitleComponent } from './components/angular-test-title/angular-test-title.component';
import { CardComponent } from './components/card/card.component';
import { MathService } from './service/math.service';
var AcmkitLibModule = /** @class */ (function () {
    function AcmkitLibModule() {
    }
    AcmkitLibModule = __decorate([
        NgModule({
            declarations: [AcmkitLibComponent, AngularTestTitleComponent, CardComponent],
            imports: [BrowserModule, RouterModule],
            exports: [AcmkitLibComponent, AngularTestTitleComponent, CardComponent],
            providers: [MathService],
        })
    ], AcmkitLibModule);
    return AcmkitLibModule;
}());
export { AcmkitLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNta2l0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2FjbWtpdC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDekcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVFyRDtJQUFBO0lBQThCLENBQUM7SUFBbEIsZUFBZTtRQU4zQixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSxhQUFhLENBQUM7WUFDNUUsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQztZQUN0QyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSxhQUFhLENBQUM7WUFDdkUsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO1NBQ3pCLENBQUM7T0FDVyxlQUFlLENBQUc7SUFBRCxzQkFBQztDQUFBLEFBQS9CLElBQStCO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFjbWtpdExpYkNvbXBvbmVudCB9IGZyb20gJy4vYWNta2l0LWxpYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbmd1bGFyVGVzdFRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FuZ3VsYXItdGVzdC10aXRsZS9hbmd1bGFyLXRlc3QtdGl0bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvbWF0aC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQWNta2l0TGliQ29tcG9uZW50LCBBbmd1bGFyVGVzdFRpdGxlQ29tcG9uZW50LCBDYXJkQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgUm91dGVyTW9kdWxlXSxcclxuICBleHBvcnRzOiBbQWNta2l0TGliQ29tcG9uZW50LCBBbmd1bGFyVGVzdFRpdGxlQ29tcG9uZW50LCBDYXJkQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtNYXRoU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY21raXRMaWJNb2R1bGUge31cclxuIl19