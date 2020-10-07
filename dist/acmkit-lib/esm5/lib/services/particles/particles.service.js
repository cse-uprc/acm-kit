import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Class to help manage a particle config.
 *
 * @author Sam Butler
 * @since August 24, 2020
 */
var ParticlesService = /** @class */ (function () {
    function ParticlesService() {
    }
    /**
     * Initializes the particlesJS based on the passed in config file
     *
     * @param configFile - The particle config file we want to initialize
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGljbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BhcnRpY2xlcy9wYXJ0aWNsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0M7Ozs7O0dBS0c7QUFJSDtJQUNFO0lBQWUsQ0FBQztJQUVoQjs7OztPQUlHO0lBQ0gsK0JBQUksR0FBSixVQUFLLFVBQWU7UUFDbEIsV0FBVyxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsY0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDOztJQVZVLGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZ0JBQWdCLENBVzVCOzJCQXZCRDtDQXVCQyxBQVhELElBV0M7U0FYWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmRlY2xhcmUgdmFyIHBhcnRpY2xlc0pTOiBhbnk7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdG8gaGVscCBtYW5hZ2UgYSBwYXJ0aWNsZSBjb25maWcuXHJcbiAqXHJcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxyXG4gKiBAc2luY2UgQXVndXN0IDI0LCAyMDIwXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFydGljbGVzU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyB0aGUgcGFydGljbGVzSlMgYmFzZWQgb24gdGhlIHBhc3NlZCBpbiBjb25maWcgZmlsZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbmZpZ0ZpbGUgLSBUaGUgcGFydGljbGUgY29uZmlnIGZpbGUgd2Ugd2FudCB0byBpbml0aWFsaXplXHJcbiAgICovXHJcbiAgaW5pdChjb25maWdGaWxlOiBhbnkpIHtcclxuICAgIHBhcnRpY2xlc0pTKCdwYXJ0aWNsZXMtanMnLCBjb25maWdGaWxlLCAoKSA9PiB7fSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==