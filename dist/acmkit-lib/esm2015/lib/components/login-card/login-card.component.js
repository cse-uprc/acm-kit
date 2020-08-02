import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../card/card.component";
import * as i2 from "@angular/router";
export class LoginCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginCardComponent.ɵfac = function LoginCardComponent_Factory(t) { return new (t || LoginCardComponent)(); };
LoginCardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoginCardComponent, selectors: [["ak-login-card"]], decls: 28, vars: 0, consts: [[1, "center-card"], [1, "padding-card"], [1, "lccc-logo"], [1, "login-header"], [2, "text-align", "center", "margin-bottom", "30px"], ["routerLink", "/create-account"], [1, "card-formatting"], ["type", "text"], ["type", "button", 1, "btn", "btn-primary"], [2, "text-align", "center", "margin-top", "20px"], ["routerLink", "/reset-password"], [1, "bottom-container"], ["href", "https://github.com/cse-uprc", "target", "_blank"]], template: function LoginCardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ak-card");
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelement(3, "div", 2);
        i0.ɵɵelementStart(4, "h1", 3);
        i0.ɵɵtext(5, "UPRC ACM Login");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p", 4);
        i0.ɵɵtext(7, "or ");
        i0.ɵɵelementStart(8, "a", 5);
        i0.ɵɵtext(9, "Create Account");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelementStart(11, "label");
        i0.ɵɵtext(12, "Username:");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(13, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 6);
        i0.ɵɵelementStart(15, "label");
        i0.ɵɵtext(16, "Password:");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(17, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "button", 8);
        i0.ɵɵtext(19, "Login");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "p", 9);
        i0.ɵɵelementStart(21, "a", 10);
        i0.ɵɵtext(22, "Forgot password?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "p", 11);
        i0.ɵɵtext(24, "Check out our ");
        i0.ɵɵelementStart(25, "a", 12);
        i0.ɵɵtext(26, "GitHub");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(27, "!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.CardComponent, i2.RouterLinkWithHref], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoginCardComponent, [{
        type: Component,
        args: [{
                selector: 'ak-login-card',
                templateUrl: './login-card.component.html'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naW4tY2FyZC9sb2dpbi1jYXJkLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2xvZ2luLWNhcmQvbG9naW4tY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBTWxELE1BQU0sT0FBTyxrQkFBa0I7SUFFN0IsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7O29GQUxVLGtCQUFrQjt1REFBbEIsa0JBQWtCO1FDTi9CLDhCQUNJO1FBQUEsK0JBQ0k7UUFBQSw4QkFFSTtRQUFBLHlCQUE2QjtRQUM3Qiw2QkFBeUI7UUFBQSw4QkFBYztRQUFBLGlCQUFLO1FBRTVDLDRCQUFrRDtRQUFBLG1CQUFHO1FBQUEsNEJBQWdDO1FBQUEsOEJBQWM7UUFBQSxpQkFBSTtRQUFBLGlCQUFJO1FBRTNHLCtCQUNJO1FBQUEsOEJBQU87UUFBQSwwQkFBUztRQUFBLGlCQUFRO1FBQ3hCLDRCQUNKO1FBQUEsaUJBQU07UUFFTiwrQkFDSTtRQUFBLDhCQUFPO1FBQUEsMEJBQVM7UUFBQSxpQkFBUTtRQUN4Qiw0QkFDSjtRQUFBLGlCQUFNO1FBRU4sa0NBQThDO1FBQUEsc0JBQUs7UUFBQSxpQkFBUztRQUU1RCw2QkFBK0M7UUFBQSw4QkFBZ0M7UUFBQSxpQ0FBZ0I7UUFBQSxpQkFBSTtRQUFBLGlCQUFJO1FBRXZHLDhCQUE2QjtRQUFBLCtCQUFjO1FBQUEsOEJBQXNEO1FBQUEsdUJBQU07UUFBQSxpQkFBSTtRQUFBLGtCQUFDO1FBQUEsaUJBQUk7UUFFcEgsaUJBQU07UUFDVixpQkFBVTtRQUNkLGlCQUFNOztrRERyQk8sa0JBQWtCO2NBSjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLDZCQUE2QjthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FrLWxvZ2luLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4tY2FyZC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5DYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJjZW50ZXItY2FyZFwiPlxuICAgIDxhay1jYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFkZGluZy1jYXJkXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsY2NjLWxvZ29cIj48L2Rpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cImxvZ2luLWhlYWRlclwiPlVQUkMgQUNNIExvZ2luPC9oMT5cbiAgICBcbiAgICAgICAgICAgIDxwIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7IG1hcmdpbi1ib3R0b206IDMwcHhcIj5vciA8YSByb3V0ZXJMaW5rPVwiL2NyZWF0ZS1hY2NvdW50XCI+Q3JlYXRlIEFjY291bnQ8L2E+PC9wPlxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9ybWF0dGluZ1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb3JtYXR0aW5nXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj5Mb2dpbjwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8cCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyOyBtYXJnaW4tdG9wOiAyMHB4XCI+PGEgcm91dGVyTGluaz1cIi9yZXNldC1wYXNzd29yZFwiPkZvcmdvdCBwYXNzd29yZD88L2E+PC9wPlxuXG4gICAgICAgICAgICA8cCBjbGFzcz1cImJvdHRvbS1jb250YWluZXJcIiA+Q2hlY2sgb3V0IG91ciA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NzZS11cHJjXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2l0SHViPC9hPiE8L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9hay1jYXJkPlxuPC9kaXY+XG5cbiJdfQ==