import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
let SiderbarComponent = class SiderbarComponent {
    constructor(router) {
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
    ngOnInit() {
        this.path = window.location.pathname;
    }
    route(item) {
        this.path = item.link;
        this.router.navigate([item.link]);
    }
    open() {
        document.getElementById('sidebar').style.width = '16rem';
        this.sidebarOpen = true;
    }
    close() {
        document.getElementById('sidebar').style.width = '3.5rem';
        this.sidebarOpen = false;
    }
    toggle() {
        if (this.sidebarOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    isOpen() {
        return this.sidebarOpen;
    }
};
SiderbarComponent.ctorParameters = () => [
    { type: Router }
];
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
export { SiderbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpDLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBMEI1QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXpCekIsVUFBSyxHQUFrQjtZQUM5QixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDN0QsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1lBQ2pFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUNqRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDOUQ7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLElBQUksRUFBRSx3QkFBd0I7YUFDL0I7WUFDRCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRTtZQUN2RSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDOUQsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQ3hFLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFO1lBQ3hFLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFO1lBQzNFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUM5RDtnQkFDRSxJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsd0JBQXdCO2FBQy9CO1NBQ0YsQ0FBQztRQUNGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBR2tCLENBQUM7SUFFdEMsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFpQjtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSTtRQUNGLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUs7UUFDSCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBOztZQWhDNkIsTUFBTTs7QUF6QnpCO0lBQVIsS0FBSyxFQUFFO2dEQXFCTjtBQXRCUyxpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsZ3FCQUF1Qzs7S0FFeEMsQ0FBQztHQUNXLGlCQUFpQixDQTBEN0I7U0ExRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNpZGViYXJJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NpZGViYXItaXRlbS5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FrLXNpZGViYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlcmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaXRlbXM6IFNpZGViYXJJdGVtW10gPSBbXHJcbiAgICB7IG5hbWU6ICdEYXNoYm9hcmQnLCBpY29uOiAnaG91c2UnLCBsaW5rOiAnL2hvbWUvZGFzaGJvYXJkJyB9LFxyXG4gICAgeyBuYW1lOiAnQ2xhc3Nyb29tJywgaWNvbjogJ2NsYXNzcm9vbScsIGxpbms6ICcvaG9tZS9jbGFzc3Jvb20nIH0sXHJcbiAgICB7IG5hbWU6ICdSZXNvdXJjZXMnLCBpY29uOiAncmVzb3VyY2VzJywgbGluazogJy9ob21lL3Jlc291cmNlcycgfSxcclxuICAgIHsgbmFtZTogJ1RlYWNoZXJzJywgaWNvbjogJ3RlYWNoZXJzJywgbGluazogJy9ob21lL3RlYWNoZXJzJyB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnU3R1ZGVudCBBZHZpc29ycycsXHJcbiAgICAgIGljb246ICdib2FyZC1tZW1iZXJzJyxcclxuICAgICAgbGluazogJy9ob21lL3N0dWRlbnQtYWR2aXNvcnMnLFxyXG4gICAgfSxcclxuICAgIHsgbmFtZTogJ1ZpZGVvIExlY3R1cmVzJywgaWNvbjogJ3ZpZGVvJywgbGluazogJy9ob21lL3ZpZGVvLWxlY3R1cmVzJyB9LFxyXG4gICAgeyBuYW1lOiAnQ2FsZW5kYXInLCBpY29uOiAnY2FsZW5kYXInLCBsaW5rOiAnL2hvbWUvY2FsZW5kYXInIH0sXHJcbiAgICB7IG5hbWU6ICdFdmVudCBTaWduIFVwJywgaWNvbjogJ2NvbnRyYWN0JywgbGluazogJy9ob21lL2V2ZW50LXNpZ24tdXAnIH0sXHJcbiAgICB7IG5hbWU6ICdBQ00gSW5mb3JtYXRpb24nLCBpY29uOiAnaW5mbycsIGxpbms6ICcvaG9tZS9hY20taW5mb3JtYXRpb24nIH0sXHJcbiAgICB7IG5hbWU6ICdCb3QgU2VydmljZSBJbmZvJywgaWNvbjogJ3JvYm90JywgbGluazogJy9ob21lL2JvdC1zZXJ2aWNlLWluZm8nIH0sXHJcbiAgICB7IG5hbWU6ICdBYm91dCBVcycsIGljb246ICdxdWVzdGlvbicsIGxpbms6ICcvaG9tZS9hYm91dC11cycgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0NvbnRhY3QgU2VydmljZXMnLFxyXG4gICAgICBpY29uOiAnY29udGFjdCcsXHJcbiAgICAgIGxpbms6ICcvaG9tZS9jb250YWN0LXNlcnZpY2VzJyxcclxuICAgIH0sXHJcbiAgXTtcclxuICBzaWRlYmFyT3BlbiA9IHRydWU7XHJcbiAgcGF0aDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICB9XHJcblxyXG4gIHJvdXRlKGl0ZW06IFNpZGViYXJJdGVtKSB7XHJcbiAgICB0aGlzLnBhdGggPSBpdGVtLmxpbms7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbaXRlbS5saW5rXSk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKS5zdHlsZS53aWR0aCA9ICcxNnJlbSc7XHJcbiAgICB0aGlzLnNpZGViYXJPcGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKS5zdHlsZS53aWR0aCA9ICczLjVyZW0nO1xyXG4gICAgdGhpcy5zaWRlYmFyT3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgaWYgKHRoaXMuc2lkZWJhck9wZW4pIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc09wZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaWRlYmFyT3BlbjtcclxuICB9XHJcbn1cclxuIl19