import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
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
    ParticlesService = __decorate([
        Injectable()
    ], ParticlesService);
    return ParticlesService;
}());
export { ParticlesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydGljbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BhcnRpY2xlcy9wYXJ0aWNsZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQzs7Ozs7R0FLRztBQUVIO0lBQ0U7SUFBZSxDQUFDO0lBRWhCOzs7O09BSUc7SUFDSCwrQkFBSSxHQUFKLFVBQUssVUFBZTtRQUNsQixXQUFXLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxjQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFWVSxnQkFBZ0I7UUFENUIsVUFBVSxFQUFFO09BQ0EsZ0JBQWdCLENBVzVCO0lBQUQsdUJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmRlY2xhcmUgdmFyIHBhcnRpY2xlc0pTOiBhbnk7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdG8gaGVscCBtYW5hZ2UgYSBwYXJ0aWNsZSBjb25maWcuXHJcbiAqXHJcbiAqIEBhdXRob3IgU2FtIEJ1dGxlclxyXG4gKiBAc2luY2UgQXVndXN0IDI0LCAyMDIwXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZXNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIHRoZSBwYXJ0aWNsZXNKUyBiYXNlZCBvbiB0aGUgcGFzc2VkIGluIGNvbmZpZyBmaWxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29uZmlnRmlsZSAtIFRoZSBwYXJ0aWNsZSBjb25maWcgZmlsZSB3ZSB3YW50IHRvIGluaXRpYWxpemVcclxuICAgKi9cclxuICBpbml0KGNvbmZpZ0ZpbGU6IGFueSkge1xyXG4gICAgcGFydGljbGVzSlMoJ3BhcnRpY2xlcy1qcycsIGNvbmZpZ0ZpbGUsICgpID0+IHt9KTtcclxuICB9XHJcbn1cclxuIl19