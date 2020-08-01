import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../card/card.component";
import * as i2 from "@angular/router";
var LoginCardComponent = /** @class */ (function () {
    function LoginCardComponent() {
    }
    LoginCardComponent.prototype.ngOnInit = function () {
    };
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
    return LoginCardComponent;
}());
export { LoginCardComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoginCardComponent, [{
        type: Component,
        args: [{
                selector: 'ak-login-card',
                templateUrl: './login-card.component.html'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naW4tY2FyZC9sb2dpbi1jYXJkLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2xvZ2luLWNhcmQvbG9naW4tY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWxEO0lBTUU7SUFBZ0IsQ0FBQztJQUVqQixxQ0FBUSxHQUFSO0lBQ0EsQ0FBQzt3RkFMVSxrQkFBa0I7MkRBQWxCLGtCQUFrQjtZQ04vQiw4QkFDSTtZQUFBLCtCQUNJO1lBQUEsOEJBRUk7WUFBQSx5QkFBNkI7WUFDN0IsNkJBQXlCO1lBQUEsOEJBQWM7WUFBQSxpQkFBSztZQUU1Qyw0QkFBa0Q7WUFBQSxtQkFBRztZQUFBLDRCQUFnQztZQUFBLDhCQUFjO1lBQUEsaUJBQUk7WUFBQSxpQkFBSTtZQUUzRywrQkFDSTtZQUFBLDhCQUFPO1lBQUEsMEJBQVM7WUFBQSxpQkFBUTtZQUN4Qiw0QkFDSjtZQUFBLGlCQUFNO1lBRU4sK0JBQ0k7WUFBQSw4QkFBTztZQUFBLDBCQUFTO1lBQUEsaUJBQVE7WUFDeEIsNEJBQ0o7WUFBQSxpQkFBTTtZQUVOLGtDQUE4QztZQUFBLHNCQUFLO1lBQUEsaUJBQVM7WUFFNUQsNkJBQStDO1lBQUEsOEJBQWdDO1lBQUEsaUNBQWdCO1lBQUEsaUJBQUk7WUFBQSxpQkFBSTtZQUV2Ryw4QkFBNkI7WUFBQSwrQkFBYztZQUFBLDhCQUFzRDtZQUFBLHVCQUFNO1lBQUEsaUJBQUk7WUFBQSxrQkFBQztZQUFBLGlCQUFJO1lBRXBILGlCQUFNO1lBQ1YsaUJBQVU7WUFDZCxpQkFBTTs7NkJEM0JOO0NBYUMsQUFYRCxJQVdDO1NBUFksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FKOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsNkJBQTZCO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWstbG9naW4tY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi1jYXJkLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNlbnRlci1jYXJkXCI+XG4gICAgPGFrLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWRkaW5nLWNhcmRcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxjY2MtbG9nb1wiPjwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwibG9naW4taGVhZGVyXCI+VVBSQyBBQ00gTG9naW48L2gxPlxuICAgIFxuICAgICAgICAgICAgPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMzBweFwiPm9yIDxhIHJvdXRlckxpbms9XCIvY3JlYXRlLWFjY291bnRcIj5DcmVhdGUgQWNjb3VudDwvYT48L3A+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb3JtYXR0aW5nXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvcm1hdHRpbmdcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPkxvZ2luPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxwIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7IG1hcmdpbi10b3A6IDIwcHhcIj48YSByb3V0ZXJMaW5rPVwiL3Jlc2V0LXBhc3N3b3JkXCI+Rm9yZ290IHBhc3N3b3JkPzwvYT48L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiYm90dG9tLWNvbnRhaW5lclwiID5DaGVjayBvdXQgb3VyIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY3NlLXVwcmNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5HaXRIdWI8L2E+ITwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2FrLWNhcmQ+XG48L2Rpdj5cblxuIl19