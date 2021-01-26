import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Environment } from '../../assets/globals';
/**
 * URL Service
 *
 * @author Sam Butler
 * @since Dec 15, 2020
 */
var UrlService = /** @class */ (function () {
    function UrlService() {
        this.urlPath = window.location.href;
    }
    /**
     * Get's the host environment
     *
     * @returns string of the host path
     */
    UrlService.prototype.getHost = function () {
        if (this.urlPath.includes(Environment.PRODUCTION_PATH)) {
            return Environment.PRODUCTION_HOST;
        }
        else if (this.urlPath.includes(Environment.DEVELOPMENT_PATH)) {
            return Environment.DEVELOPMENT_HOST;
        }
        return Environment.LOCAL_HOST;
    };
    /**
     * Get's the web path of the url
     *
     * @returns string of the web path
     */
    UrlService.prototype.getPath = function () {
        if (this.urlPath.includes(Environment.PRODUCTION_PATH)) {
            return Environment.PRODUCTION_PATH;
        }
        else if (this.urlPath.includes(Environment.DEVELOPMENT_PATH)) {
            return Environment.DEVELOPMENT_PATH;
        }
        return Environment.LOCAL_PATH;
    };
    /**
     * Get's the full web URL
     *
     * @returns string of the full web url
     */
    UrlService.prototype.getWebUrl = function () {
        if (this.isHttps()) {
            return "https://" + this.getPath() + "." + Environment.HEROKU_URI;
        }
        else if (this.isLocal()) {
            return "http://" + this.getPath();
        }
        return "http://" + this.getPath() + "." + Environment.HEROKU_URI;
    };
    /**
     * Get's the full API URL
     *
     * @returns string of the full API url
     */
    UrlService.prototype.getAPIUrl = function () {
        if (this.isHttps()) {
            return "https://" + this.getHost() + "." + Environment.HEROKU_URI;
        }
        else if (this.isLocal()) {
            return "http://" + this.getHost();
        }
        return "http://" + this.getHost() + "." + Environment.HEROKU_URI;
    };
    /**
     * Get's the socket environment
     *
     * @returns string of the socket path
     */
    UrlService.prototype.getSocketPath = function () {
        var socketType = this.isHttps() ? 'wss://' : 'ws://';
        if (this.isLocal()) {
            return "" + socketType + this.getHost() + Environment.SOCKET_ENDPOINT;
        }
        return "" + socketType + this.getHost() + "." + Environment.HEROKU_URI + Environment.SOCKET_ENDPOINT;
    };
    /**
     * Determines if the url is https or http
     *
     * @returns boolean of logical comparison
     */
    UrlService.prototype.isHttps = function () {
        return this.urlPath.includes('https');
    };
    /**
     * Determines if the url is local
     *
     * @returns boolean of logical comparison
     */
    UrlService.prototype.isLocal = function () {
        return this.urlPath.includes('localhost');
    };
    UrlService = __decorate([
        Injectable()
    ], UrlService);
    return UrlService;
}());
export { UrlService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3VybC91cmwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQ7Ozs7O0dBS0c7QUFFSDtJQUdFO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDRCQUFPLEdBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN0RCxPQUFPLFdBQVcsQ0FBQyxlQUFlLENBQUM7U0FDcEM7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQzlELE9BQU8sV0FBVyxDQUFDLGdCQUFnQixDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsNEJBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3RELE9BQU8sV0FBVyxDQUFDLGVBQWUsQ0FBQztTQUNwQzthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDOUQsT0FBTyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7U0FDckM7UUFDRCxPQUFPLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEIsT0FBTyxhQUFXLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBSSxXQUFXLENBQUMsVUFBWSxDQUFDO1NBQzlEO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDekIsT0FBTyxZQUFVLElBQUksQ0FBQyxPQUFPLEVBQUksQ0FBQztTQUNuQztRQUNELE9BQU8sWUFBVSxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQUksV0FBVyxDQUFDLFVBQVksQ0FBQztJQUM5RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDhCQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNsQixPQUFPLGFBQVcsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFJLFdBQVcsQ0FBQyxVQUFZLENBQUM7U0FDOUQ7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN6QixPQUFPLFlBQVUsSUFBSSxDQUFDLE9BQU8sRUFBSSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxZQUFVLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBSSxXQUFXLENBQUMsVUFBWSxDQUFDO0lBQzlELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsa0NBQWEsR0FBYjtRQUNFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEIsT0FBTyxLQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsV0FBVyxDQUFDLGVBQWlCLENBQUM7U0FDdkU7UUFDRCxPQUFPLEtBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBSSxXQUFXLENBQUMsVUFBVSxHQUM3RCxXQUFXLENBQUMsZUFDWixDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw0QkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDRCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUE5RlUsVUFBVTtRQUR0QixVQUFVLEVBQUU7T0FDQSxVQUFVLENBK0Z0QjtJQUFELGlCQUFDO0NBQUEsQUEvRkQsSUErRkM7U0EvRlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Fzc2V0cy9nbG9iYWxzJztcclxuXHJcbi8qKlxyXG4gKiBVUkwgU2VydmljZVxyXG4gKlxyXG4gKiBAYXV0aG9yIFNhbSBCdXRsZXJcclxuICogQHNpbmNlIERlYyAxNSwgMjAyMFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXJsU2VydmljZSB7XHJcbiAgcHJpdmF0ZSB1cmxQYXRoOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cmxQYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQncyB0aGUgaG9zdCBlbnZpcm9ubWVudFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSBob3N0IHBhdGhcclxuICAgKi9cclxuICBnZXRIb3N0KCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy51cmxQYXRoLmluY2x1ZGVzKEVudmlyb25tZW50LlBST0RVQ1RJT05fUEFUSCkpIHtcclxuICAgICAgcmV0dXJuIEVudmlyb25tZW50LlBST0RVQ1RJT05fSE9TVDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy51cmxQYXRoLmluY2x1ZGVzKEVudmlyb25tZW50LkRFVkVMT1BNRU5UX1BBVEgpKSB7XHJcbiAgICAgIHJldHVybiBFbnZpcm9ubWVudC5ERVZFTE9QTUVOVF9IT1NUO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEVudmlyb25tZW50LkxPQ0FMX0hPU1Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQncyB0aGUgd2ViIHBhdGggb2YgdGhlIHVybFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB3ZWIgcGF0aFxyXG4gICAqL1xyXG4gIGdldFBhdGgoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLnVybFBhdGguaW5jbHVkZXMoRW52aXJvbm1lbnQuUFJPRFVDVElPTl9QQVRIKSkge1xyXG4gICAgICByZXR1cm4gRW52aXJvbm1lbnQuUFJPRFVDVElPTl9QQVRIO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnVybFBhdGguaW5jbHVkZXMoRW52aXJvbm1lbnQuREVWRUxPUE1FTlRfUEFUSCkpIHtcclxuICAgICAgcmV0dXJuIEVudmlyb25tZW50LkRFVkVMT1BNRU5UX1BBVEg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRW52aXJvbm1lbnQuTE9DQUxfUEFUSDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCdzIHRoZSBmdWxsIHdlYiBVUkxcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgZnVsbCB3ZWIgdXJsXHJcbiAgICovXHJcbiAgZ2V0V2ViVXJsKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5pc0h0dHBzKCkpIHtcclxuICAgICAgcmV0dXJuIGBodHRwczovLyR7dGhpcy5nZXRQYXRoKCl9LiR7RW52aXJvbm1lbnQuSEVST0tVX1VSSX1gO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzTG9jYWwoKSkge1xyXG4gICAgICByZXR1cm4gYGh0dHA6Ly8ke3RoaXMuZ2V0UGF0aCgpfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYGh0dHA6Ly8ke3RoaXMuZ2V0UGF0aCgpfS4ke0Vudmlyb25tZW50LkhFUk9LVV9VUkl9YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCdzIHRoZSBmdWxsIEFQSSBVUkxcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgZnVsbCBBUEkgdXJsXHJcbiAgICovXHJcbiAgZ2V0QVBJVXJsKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5pc0h0dHBzKCkpIHtcclxuICAgICAgcmV0dXJuIGBodHRwczovLyR7dGhpcy5nZXRIb3N0KCl9LiR7RW52aXJvbm1lbnQuSEVST0tVX1VSSX1gO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzTG9jYWwoKSkge1xyXG4gICAgICByZXR1cm4gYGh0dHA6Ly8ke3RoaXMuZ2V0SG9zdCgpfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYGh0dHA6Ly8ke3RoaXMuZ2V0SG9zdCgpfS4ke0Vudmlyb25tZW50LkhFUk9LVV9VUkl9YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCdzIHRoZSBzb2NrZXQgZW52aXJvbm1lbnRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgc29ja2V0IHBhdGhcclxuICAgKi9cclxuICBnZXRTb2NrZXRQYXRoKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzb2NrZXRUeXBlID0gdGhpcy5pc0h0dHBzKCkgPyAnd3NzOi8vJyA6ICd3czovLyc7XHJcbiAgICBpZiAodGhpcy5pc0xvY2FsKCkpIHtcclxuICAgICAgcmV0dXJuIGAke3NvY2tldFR5cGV9JHt0aGlzLmdldEhvc3QoKX0ke0Vudmlyb25tZW50LlNPQ0tFVF9FTkRQT0lOVH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke3NvY2tldFR5cGV9JHt0aGlzLmdldEhvc3QoKX0uJHtFbnZpcm9ubWVudC5IRVJPS1VfVVJJfSR7XHJcbiAgICAgIEVudmlyb25tZW50LlNPQ0tFVF9FTkRQT0lOVFxyXG4gICAgfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIGlmIHRoZSB1cmwgaXMgaHR0cHMgb3IgaHR0cFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgYm9vbGVhbiBvZiBsb2dpY2FsIGNvbXBhcmlzb25cclxuICAgKi9cclxuICBpc0h0dHBzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudXJsUGF0aC5pbmNsdWRlcygnaHR0cHMnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgaWYgdGhlIHVybCBpcyBsb2NhbFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgYm9vbGVhbiBvZiBsb2dpY2FsIGNvbXBhcmlzb25cclxuICAgKi9cclxuICBpc0xvY2FsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudXJsUGF0aC5pbmNsdWRlcygnbG9jYWxob3N0Jyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==