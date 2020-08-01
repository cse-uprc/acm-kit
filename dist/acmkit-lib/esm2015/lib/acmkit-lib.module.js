import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { CardComponent } from './components/card/card.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import * as i0 from "@angular/core";
export class AcmkitLibModule {
}
AcmkitLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: AcmkitLibModule });
AcmkitLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AcmkitLibModule_Factory(t) { return new (t || AcmkitLibModule)(); }, providers: [], imports: [[BrowserModule, RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AcmkitLibModule, { declarations: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent], imports: [BrowserModule, RouterModule], exports: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AcmkitLibModule, [{
        type: NgModule,
        args: [{
                declarations: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent],
                imports: [BrowserModule, RouterModule],
                exports: [AcmkitLibComponent, CardComponent, BasePageComponent, LoginCardComponent],
                providers: [],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNta2l0LWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2FjbWtpdC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7O0FBUWxGLE1BQU0sT0FBTyxlQUFlOzttREFBZixlQUFlOzZHQUFmLGVBQWUsbUJBRmYsRUFBRSxZQUZKLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQzt3RkFJM0IsZUFBZSxtQkFMWCxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLGFBQzdFLGFBQWEsRUFBRSxZQUFZLGFBQzNCLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0I7a0RBR3ZFLGVBQWU7Y0FOM0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztnQkFDeEYsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO2dCQUNuRixTQUFTLEVBQUUsRUFBRTthQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBY21raXRMaWJDb21wb25lbnQgfSBmcm9tICcuL2FjbWtpdC1saWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmFzZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYmFzZS1wYWdlL2Jhc2UtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4tY2FyZC9sb2dpbi1jYXJkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0FjbWtpdExpYkNvbXBvbmVudCwgQ2FyZENvbXBvbmVudCwgQmFzZVBhZ2VDb21wb25lbnQsIExvZ2luQ2FyZENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIFJvdXRlck1vZHVsZV0sXHJcbiAgZXhwb3J0czogW0FjbWtpdExpYkNvbXBvbmVudCwgQ2FyZENvbXBvbmVudCwgQmFzZVBhZ2VDb21wb25lbnQsIExvZ2luQ2FyZENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjbWtpdExpYk1vZHVsZSB7fVxyXG4iXX0=