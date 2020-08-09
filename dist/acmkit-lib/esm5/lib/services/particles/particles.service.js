import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var ParticlesService = /** @class */ (function () {
    function ParticlesService() {
    }
    ParticlesService.prototype.init = function (configFile) {
        particlesJS('particles-js', configFile, function () { });
    };
    ParticlesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ParticlesService_Factory() { return new ParticlesService(); }, token: ParticlesService, providedIn: "root" });
    ParticlesService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ParticlesService);
    return ParticlesService;
}());
export { ParticlesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGljbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BhcnRpY2xlcy9wYXJ0aWNsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0M7SUFDRTtJQUFlLENBQUM7SUFFaEIsK0JBQUksR0FBSixVQUFLLFVBQWU7UUFDbEIsV0FBVyxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsY0FBYSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDOztJQUxVLGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZ0JBQWdCLENBTTVCOzJCQVpEO0NBWUMsQUFORCxJQU1DO1NBTlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSB2YXIgcGFydGljbGVzSlM6IGFueTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgaW5pdChjb25maWdGaWxlOiBhbnkpIHtcbiAgICBwYXJ0aWNsZXNKUygncGFydGljbGVzLWpzJywgY29uZmlnRmlsZSwgZnVuY3Rpb24gKCkge30pO1xuICB9XG59XG4iXX0=