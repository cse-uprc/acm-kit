import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var SiderbarComponent = /** @class */ (function () {
    function SiderbarComponent() {
        this.items = [
            { name: 'Dashboard', icon: 'house' },
            { name: 'Classroom', icon: 'house' },
            { name: 'Resources', icon: 'house' },
            { name: 'Teachers', icon: 'house' },
            { name: 'Student Advisors', icon: 'house' },
            { name: 'Video Lectures', icon: 'house' },
            { name: 'Calendar Events', icon: 'house' },
            { name: 'Event Sign Up', icon: 'house' },
            { name: 'ACM Information', icon: 'house' },
            { name: 'Bot Service Info', icon: 'house' },
            { name: 'About Us', icon: 'house' },
            { name: 'Contact Services', icon: 'house' },
        ];
    }
    __decorate([
        Input()
    ], SiderbarComponent.prototype, "items", void 0);
    SiderbarComponent = __decorate([
        Component({
            selector: 'ak-sidebar',
            template: "<ul class=\"menu-items\">\r\n  <li class=\"menu-item\" *ngFor=\"let item of items\">\r\n    <a>\r\n      <ak-icon [icon]=\"item.icon\" class=\"icon\"></ak-icon>\r\n      <span class=\"title\" for=\"id1\">{{ item.name }}</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
            styles: ["li{border-bottom:1px solid #edf1f7}.menu-items{color:#222b45;top:0;left:0;bottom:0;width:12%;min-width:250px;z-index:0;font-weight:400;margin:0;padding:0;position:relative;background:#fff;box-shadow:.5rem .5rem 1rem 0 rgba(44,51,73,.1);font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif}.menu-item{font-family:Open Sans,sans-serif;font-size:1rem;font-weight:600;line-height:1.5rem;list-style:none;padding:1.25rem 1rem;cursor:pointer;transition:.4s}.menu-item a .title{flex:1 0 auto;vertical-align:text-top}.menu-item a .icon{color:#8f9bb3;margin:0 .5rem 0 0}.menu-item:hover{color:#36f}"]
        })
    ], SiderbarComponent);
    return SiderbarComponent;
}());
export { SiderbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7SUFlRTtRQWRTLFVBQUssR0FBRztZQUNmLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQ3BDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQ3BDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQ3BDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQ25DLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDM0MsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUN6QyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDMUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUMzQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUNuQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1NBQzVDLENBQUM7SUFDYSxDQUFDO0lBZFA7UUFBUixLQUFLLEVBQUU7b0RBYU47SUFkUyxpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsa1JBQXVDOztTQUV4QyxDQUFDO09BQ1csaUJBQWlCLENBZ0I3QjtJQUFELHdCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FoQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhay1zaWRlYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZXJiYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGl0ZW1zID0gW1xyXG4gICAgeyBuYW1lOiAnRGFzaGJvYXJkJywgaWNvbjogJ2hvdXNlJyB9LFxyXG4gICAgeyBuYW1lOiAnQ2xhc3Nyb29tJywgaWNvbjogJ2hvdXNlJyB9LFxyXG4gICAgeyBuYW1lOiAnUmVzb3VyY2VzJywgaWNvbjogJ2hvdXNlJyB9LFxyXG4gICAgeyBuYW1lOiAnVGVhY2hlcnMnLCBpY29uOiAnaG91c2UnIH0sXHJcbiAgICB7IG5hbWU6ICdTdHVkZW50IEFkdmlzb3JzJywgaWNvbjogJ2hvdXNlJyB9LFxyXG4gICAgeyBuYW1lOiAnVmlkZW8gTGVjdHVyZXMnLCBpY29uOiAnaG91c2UnIH0sXHJcbiAgICB7IG5hbWU6ICdDYWxlbmRhciBFdmVudHMnLCBpY29uOiAnaG91c2UnIH0sXHJcbiAgICB7IG5hbWU6ICdFdmVudCBTaWduIFVwJywgaWNvbjogJ2hvdXNlJyB9LFxyXG4gICAgeyBuYW1lOiAnQUNNIEluZm9ybWF0aW9uJywgaWNvbjogJ2hvdXNlJyB9LFxyXG4gICAgeyBuYW1lOiAnQm90IFNlcnZpY2UgSW5mbycsIGljb246ICdob3VzZScgfSxcclxuICAgIHsgbmFtZTogJ0Fib3V0IFVzJywgaWNvbjogJ2hvdXNlJyB9LFxyXG4gICAgeyBuYW1lOiAnQ29udGFjdCBTZXJ2aWNlcycsIGljb246ICdob3VzZScgfSxcclxuICBdO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=