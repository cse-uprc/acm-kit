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
        this.path = item.link;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpDO0lBMEJFLDJCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXpCekIsVUFBSyxHQUFrQjtZQUM5QixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDN0QsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQ2pFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUNqRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDOUQ7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLElBQUksRUFBRSx3QkFBd0I7YUFDL0I7WUFDRCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRTtZQUN2RSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDOUQsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQ3hFLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFO1lBQ3hFLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFO1lBQzNFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUM5RDtnQkFDRSxJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsd0JBQXdCO2FBQy9CO1NBQ0YsQ0FBQztRQUNGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBR2tCLENBQUM7SUFFdEMsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxJQUFpQjtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUNFLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDRSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7O2dCQS9CMkIsTUFBTTs7SUF6QnpCO1FBQVIsS0FBSyxFQUFFO29EQXFCTjtJQXRCUyxpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsZ3FCQUF1Qzs7U0FFeEMsQ0FBQztPQUNXLGlCQUFpQixDQTBEN0I7SUFBRCx3QkFBQztDQUFBLEFBMURELElBMERDO1NBMURZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTaWRlYmFySXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9zaWRlYmFyLWl0ZW0ubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhay1zaWRlYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZXJiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBTaWRlYmFySXRlbVtdID0gW1xyXG4gICAgeyBuYW1lOiAnRGFzaGJvYXJkJywgaWNvbjogJ2hvdXNlJywgbGluazogJy9ob21lL2Rhc2hib2FyZCcgfSxcclxuICAgIHsgbmFtZTogJ0NsYXNzcm9vbScsIGljb246ICdjbGFzc3Jvb20nLCBsaW5rOiAnL2hvbWUvY2xhc3Nyb29tJyB9LFxyXG4gICAgeyBuYW1lOiAnUmVzb3VyY2VzJywgaWNvbjogJ3Jlc291cmNlcycsIGxpbms6ICcvaG9tZS9yZXNvdXJjZXMnIH0sXHJcbiAgICB7IG5hbWU6ICdUZWFjaGVycycsIGljb246ICd0ZWFjaGVycycsIGxpbms6ICcvaG9tZS90ZWFjaGVycycgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1N0dWRlbnQgQWR2aXNvcnMnLFxyXG4gICAgICBpY29uOiAnYm9hcmQtbWVtYmVycycsXHJcbiAgICAgIGxpbms6ICcvaG9tZS9zdHVkZW50LWFkdmlzb3JzJyxcclxuICAgIH0sXHJcbiAgICB7IG5hbWU6ICdWaWRlbyBMZWN0dXJlcycsIGljb246ICd2aWRlbycsIGxpbms6ICcvaG9tZS92aWRlby1sZWN0dXJlcycgfSxcclxuICAgIHsgbmFtZTogJ0NhbGVuZGFyJywgaWNvbjogJ2NhbGVuZGFyJywgbGluazogJy9ob21lL2NhbGVuZGFyJyB9LFxyXG4gICAgeyBuYW1lOiAnRXZlbnQgU2lnbiBVcCcsIGljb246ICdjb250cmFjdCcsIGxpbms6ICcvaG9tZS9ldmVudC1zaWduLXVwJyB9LFxyXG4gICAgeyBuYW1lOiAnQUNNIEluZm9ybWF0aW9uJywgaWNvbjogJ2luZm8nLCBsaW5rOiAnL2hvbWUvYWNtLWluZm9ybWF0aW9uJyB9LFxyXG4gICAgeyBuYW1lOiAnQm90IFNlcnZpY2UgSW5mbycsIGljb246ICdyb2JvdCcsIGxpbms6ICcvaG9tZS9ib3Qtc2VydmljZS1pbmZvJyB9LFxyXG4gICAgeyBuYW1lOiAnQWJvdXQgVXMnLCBpY29uOiAncXVlc3Rpb24nLCBsaW5rOiAnL2hvbWUvYWJvdXQtdXMnIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdDb250YWN0IFNlcnZpY2VzJyxcclxuICAgICAgaWNvbjogJ2NvbnRhY3QnLFxyXG4gICAgICBsaW5rOiAnL2hvbWUvY29udGFjdC1zZXJ2aWNlcycsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgc2lkZWJhck9wZW4gPSB0cnVlO1xyXG4gIHBhdGg6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgfVxyXG5cclxuICByb3V0ZShpdGVtOiBTaWRlYmFySXRlbSkge1xyXG4gICAgdGhpcy5wYXRoID0gaXRlbS5saW5rO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2l0ZW0ubGlua10pO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJykuc3R5bGUud2lkdGggPSAnMTZyZW0nO1xyXG4gICAgdGhpcy5zaWRlYmFyT3BlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJykuc3R5bGUud2lkdGggPSAnMy41cmVtJztcclxuICAgIHRoaXMuc2lkZWJhck9wZW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIGlmICh0aGlzLnNpZGViYXJPcGVuKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNPcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2lkZWJhck9wZW47XHJcbiAgfVxyXG59XHJcbiJdfQ==