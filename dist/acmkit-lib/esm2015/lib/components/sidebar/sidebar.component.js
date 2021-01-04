import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let SiderbarComponent = class SiderbarComponent {
    constructor() {
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
};
__decorate([
    Input()
], SiderbarComponent.prototype, "items", void 0);
SiderbarComponent = __decorate([
    Component({
        selector: 'ak-sidebar',
        template: "<ul class=\"menu-items\">\r\n  <li class=\"menu-item\" *ngFor=\"let item of items\">\r\n    <a>\r\n      <ak-icon [icon]=\"item.icon\" class=\"icon\"></ak-icon>\r\n      <span class=\"title\" for=\"id1\">{{ item.name }}</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
        styles: ["li{border-bottom:1px solid #edf1f7}.menu-items{color:#222b45;top:0;left:0;bottom:0;width:12%;height:100%;min-width:250px;z-index:0;font-weight:400;margin:0;padding:0;position:relative;background:#fff;box-shadow:.5rem .5rem 1rem 0 rgba(44,51,73,.1);font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif}.menu-item{font-family:Open Sans,sans-serif;font-size:1rem;font-weight:600;line-height:1.5rem;list-style:none;padding:1.25rem 1rem;cursor:pointer;transition:.4s}.menu-item a .title{flex:1 0 auto;vertical-align:text-top}.menu-item a .icon{color:#8f9bb3;margin:0 .5rem 0 0}.menu-item:hover{color:#36f}"]
    })
], SiderbarComponent);
export { SiderbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFlNUI7UUFkUyxVQUFLLEdBQUc7WUFDZixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUNwQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUNwQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUNwQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUNuQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzNDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDekMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUMxQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUN4QyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQzFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDM0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDbkMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtTQUM1QyxDQUFDO0lBQ2EsQ0FBQztDQUNqQixDQUFBO0FBZlU7SUFBUixLQUFLLEVBQUU7Z0RBYU47QUFkUyxpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsa1JBQXVDOztLQUV4QyxDQUFDO0dBQ1csaUJBQWlCLENBZ0I3QjtTQWhCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FrLXNpZGViYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlcmJhckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaXRlbXMgPSBbXHJcbiAgICB7IG5hbWU6ICdEYXNoYm9hcmQnLCBpY29uOiAnaG91c2UnIH0sXHJcbiAgICB7IG5hbWU6ICdDbGFzc3Jvb20nLCBpY29uOiAnaG91c2UnIH0sXHJcbiAgICB7IG5hbWU6ICdSZXNvdXJjZXMnLCBpY29uOiAnaG91c2UnIH0sXHJcbiAgICB7IG5hbWU6ICdUZWFjaGVycycsIGljb246ICdob3VzZScgfSxcclxuICAgIHsgbmFtZTogJ1N0dWRlbnQgQWR2aXNvcnMnLCBpY29uOiAnaG91c2UnIH0sXHJcbiAgICB7IG5hbWU6ICdWaWRlbyBMZWN0dXJlcycsIGljb246ICdob3VzZScgfSxcclxuICAgIHsgbmFtZTogJ0NhbGVuZGFyIEV2ZW50cycsIGljb246ICdob3VzZScgfSxcclxuICAgIHsgbmFtZTogJ0V2ZW50IFNpZ24gVXAnLCBpY29uOiAnaG91c2UnIH0sXHJcbiAgICB7IG5hbWU6ICdBQ00gSW5mb3JtYXRpb24nLCBpY29uOiAnaG91c2UnIH0sXHJcbiAgICB7IG5hbWU6ICdCb3QgU2VydmljZSBJbmZvJywgaWNvbjogJ2hvdXNlJyB9LFxyXG4gICAgeyBuYW1lOiAnQWJvdXQgVXMnLCBpY29uOiAnaG91c2UnIH0sXHJcbiAgICB7IG5hbWU6ICdDb250YWN0IFNlcnZpY2VzJywgaWNvbjogJ2hvdXNlJyB9LFxyXG4gIF07XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiJdfQ==