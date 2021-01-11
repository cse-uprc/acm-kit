import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var SiderbarComponent = /** @class */ (function () {
    function SiderbarComponent(router) {
        this.router = router;
        this.items = [
            { name: 'Dashboard', icon: 'house', link: '/home/dashboard' },
            { name: 'Classroom', icon: 'classroom', link: '/home/classroom' },
            { name: 'Resources', icon: 'resources', link: '/home/resources' },
            { name: 'Teachers', icon: 'teachers', link: '/home/teachers' },
            {
                name: 'Student Advisors',
                icon: 'board-members',
                link: '/home/student-advisors',
            },
            { name: 'Video Lectures', icon: 'video', link: '/home/video-lectures' },
            { name: 'Calendar', icon: 'calendar', link: '/home/calendar' },
            { name: 'Event Sign Up', icon: 'contract', link: '/home/event-sign-up' },
            { name: 'ACM Information', icon: 'info', link: '/home/acm-information' },
            { name: 'Bot Service Info', icon: 'robot', link: '/home/bot-service-info' },
            { name: 'About Us', icon: 'question', link: '/home/about-us' },
            {
                name: 'Contact Services',
                icon: 'contact',
                link: '/home/contact-services',
            },
        ];
        this.sidebarOpen = true;
    }
    SiderbarComponent.prototype.ngOnInit = function () {
        this.path = window.location.pathname;
    };
    SiderbarComponent.prototype.route = function (item) {
        this.path = window.location.pathname;
        this.router.navigate([item.link]);
    };
    SiderbarComponent.prototype.open = function () {
        document.getElementById('sidebar').style.width = '16rem';
        this.sidebarOpen = true;
    };
    SiderbarComponent.prototype.close = function () {
        document.getElementById('sidebar').style.width = '3.5rem';
        this.sidebarOpen = false;
    };
    SiderbarComponent.prototype.toggle = function () {
        if (this.sidebarOpen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    SiderbarComponent.prototype.isOpen = function () {
        return this.sidebarOpen;
    };
    SiderbarComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    __decorate([
        Input()
    ], SiderbarComponent.prototype, "items", void 0);
    SiderbarComponent = __decorate([
        Component({
            selector: 'ak-sidebar',
            template: "<ul id=\"sidebar\" class=\"menu-items scrollable\">\r\n  <li class=\"menu-item\" *ngFor=\"let item of items\" (click)=\"route(item)\">\r\n    <a>\r\n      <ak-icon\r\n        [icon]=\"item.icon\"\r\n        class=\"icon\"\r\n        [ngClass]=\"{ 'item-selected': path === item.link }\"\r\n      ></ak-icon>\r\n      <span\r\n        class=\"title\"\r\n        [ngClass]=\"{ 'item-selected': path === item.link }\"\r\n        *ngIf=\"sidebarOpen\"\r\n        >{{ item.name }}</span\r\n      >\r\n    </a>\r\n  </li>\r\n  <li class=\"menu-item\">\r\n    <a>\r\n      <ak-icon></ak-icon>\r\n      <span class=\"title\"></span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
            styles: ["li{border-bottom:1px solid #edf1f7}.fixed{position:fixed}.scrollable::-webkit-scrollbar{display:none}.scrollable{-ms-overflow-style:none;scrollbar-width:none}.menu-items{overflow-y:scroll;color:#222b45;top:0;left:0;bottom:0;height:100%;width:16rem;z-index:0;font-weight:400;margin:4.75rem 0 0;padding:0;position:fixed;background:#fff;box-shadow:.5rem .5rem 1rem 0 rgba(44,51,73,.1);font-family:Arial,\"Helvetica Neue\",Helvetica,sans-serif;transition:.5s}.menu-item{font-family:Open Sans,sans-serif;font-size:1rem;font-weight:600;line-height:1.5rem;list-style:none;padding:1.25rem 1rem;cursor:pointer;transition:.4s}.menu-item a .title{flex:1 0 auto;vertical-align:text-top}.menu-item a .icon{color:#8f9bb3;margin:0 .5rem 0 0;transition:.4s}.menu-item a .icon:hover,.menu-item:hover{color:#36f}.item-selected{color:#36f!important}"]
        })
    ], SiderbarComponent);
    return SiderbarComponent;
}());
export { SiderbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpDO0lBMEJFLDJCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXpCekIsVUFBSyxHQUFrQjtZQUM5QixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDN0QsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQ2pFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUNqRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDOUQ7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLElBQUksRUFBRSx3QkFBd0I7YUFDL0I7WUFDRCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRTtZQUN2RSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDOUQsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQ3hFLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFO1lBQ3hFLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFO1lBQzNFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUM5RDtnQkFDRSxJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsd0JBQXdCO2FBQy9CO1NBQ0YsQ0FBQztRQUNGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBR2tCLENBQUM7SUFFdEMsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxJQUFpQjtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGdDQUFJLEdBQUo7UUFDRSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQ0FBSyxHQUFMO1FBQ0UsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOztnQkEvQjJCLE1BQU07O0lBekJ6QjtRQUFSLEtBQUssRUFBRTtvREFxQk47SUF0QlMsaUJBQWlCO1FBTDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLGdxQkFBdUM7O1NBRXhDLENBQUM7T0FDVyxpQkFBaUIsQ0EwRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQTFERCxJQTBEQztTQTFEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2lkZWJhckl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvc2lkZWJhci1pdGVtLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWstc2lkZWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZGViYXIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVyYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpdGVtczogU2lkZWJhckl0ZW1bXSA9IFtcclxuICAgIHsgbmFtZTogJ0Rhc2hib2FyZCcsIGljb246ICdob3VzZScsIGxpbms6ICcvaG9tZS9kYXNoYm9hcmQnIH0sXHJcbiAgICB7IG5hbWU6ICdDbGFzc3Jvb20nLCBpY29uOiAnY2xhc3Nyb29tJywgbGluazogJy9ob21lL2NsYXNzcm9vbScgfSxcclxuICAgIHsgbmFtZTogJ1Jlc291cmNlcycsIGljb246ICdyZXNvdXJjZXMnLCBsaW5rOiAnL2hvbWUvcmVzb3VyY2VzJyB9LFxyXG4gICAgeyBuYW1lOiAnVGVhY2hlcnMnLCBpY29uOiAndGVhY2hlcnMnLCBsaW5rOiAnL2hvbWUvdGVhY2hlcnMnIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdTdHVkZW50IEFkdmlzb3JzJyxcclxuICAgICAgaWNvbjogJ2JvYXJkLW1lbWJlcnMnLFxyXG4gICAgICBsaW5rOiAnL2hvbWUvc3R1ZGVudC1hZHZpc29ycycsXHJcbiAgICB9LFxyXG4gICAgeyBuYW1lOiAnVmlkZW8gTGVjdHVyZXMnLCBpY29uOiAndmlkZW8nLCBsaW5rOiAnL2hvbWUvdmlkZW8tbGVjdHVyZXMnIH0sXHJcbiAgICB7IG5hbWU6ICdDYWxlbmRhcicsIGljb246ICdjYWxlbmRhcicsIGxpbms6ICcvaG9tZS9jYWxlbmRhcicgfSxcclxuICAgIHsgbmFtZTogJ0V2ZW50IFNpZ24gVXAnLCBpY29uOiAnY29udHJhY3QnLCBsaW5rOiAnL2hvbWUvZXZlbnQtc2lnbi11cCcgfSxcclxuICAgIHsgbmFtZTogJ0FDTSBJbmZvcm1hdGlvbicsIGljb246ICdpbmZvJywgbGluazogJy9ob21lL2FjbS1pbmZvcm1hdGlvbicgfSxcclxuICAgIHsgbmFtZTogJ0JvdCBTZXJ2aWNlIEluZm8nLCBpY29uOiAncm9ib3QnLCBsaW5rOiAnL2hvbWUvYm90LXNlcnZpY2UtaW5mbycgfSxcclxuICAgIHsgbmFtZTogJ0Fib3V0IFVzJywgaWNvbjogJ3F1ZXN0aW9uJywgbGluazogJy9ob21lL2Fib3V0LXVzJyB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQ29udGFjdCBTZXJ2aWNlcycsXHJcbiAgICAgIGljb246ICdjb250YWN0JyxcclxuICAgICAgbGluazogJy9ob21lL2NvbnRhY3Qtc2VydmljZXMnLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHNpZGViYXJPcGVuID0gdHJ1ZTtcclxuICBwYXRoOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gIH1cclxuXHJcbiAgcm91dGUoaXRlbTogU2lkZWJhckl0ZW0pIHtcclxuICAgIHRoaXMucGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtpdGVtLmxpbmtdKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpLnN0eWxlLndpZHRoID0gJzE2cmVtJztcclxuICAgIHRoaXMuc2lkZWJhck9wZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpLnN0eWxlLndpZHRoID0gJzMuNXJlbSc7XHJcbiAgICB0aGlzLnNpZGViYXJPcGVuID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICBpZiAodGhpcy5zaWRlYmFyT3Blbikge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLnNpZGViYXJPcGVuO1xyXG4gIH1cclxufVxyXG4iXX0=