import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var MathService = /** @class */ (function () {
    function MathService() {
    }
    MathService.prototype.addNumbers = function (num1, num2) {
        return num1 + num2;
    };
    MathService.prototype.subtractNumbers = function (num1, num2) {
        return num1 - num2;
    };
    MathService.prototype.multiplyNumbers = function (num1, num2) {
        return num1 * num2;
    };
    MathService.prototype.addThreeNumbers = function (num1, num2, num3) {
        return num1 + num2 + num3;
    };
    MathService.prototype.testMethod = function () {
        console.log('This is from the library');
    };
    MathService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MathService_Factory() { return new MathService(); }, token: MathService, providedIn: "root" });
    MathService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], MathService);
    return MathService;
}());
export { MathService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21hdGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0M7SUFDRTtJQUFlLENBQUM7SUFFaEIsZ0NBQVUsR0FBVixVQUFXLElBQUksRUFBRSxJQUFJO1FBQ25CLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQscUNBQWUsR0FBZixVQUFnQixJQUFJLEVBQUUsSUFBSTtRQUN4QixPQUFPLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELHFDQUFlLEdBQWYsVUFBZ0IsSUFBSSxFQUFFLElBQUk7UUFDeEIsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBZSxHQUFmLFVBQWdCLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUM5QixPQUFPLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O0lBckJVLFdBQVc7UUFIdkIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFdBQVcsQ0FzQnZCO3NCQTNCRDtDQTJCQyxBQXRCRCxJQXNCQztTQXRCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWF0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkTnVtYmVycyhudW0xLCBudW0yKSB7XG4gICAgcmV0dXJuIG51bTEgKyBudW0yO1xuICB9XG5cbiAgc3VidHJhY3ROdW1iZXJzKG51bTEsIG51bTIpIHtcbiAgICByZXR1cm4gbnVtMSAtIG51bTI7XG4gIH1cblxuICBtdWx0aXBseU51bWJlcnMobnVtMSwgbnVtMikge1xuICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgfVxuXG4gIGFkZFRocmVlTnVtYmVycyhudW0xLCBudW0yLCBudW0zKSB7XG4gICAgcmV0dXJuIG51bTEgKyBudW0yICsgbnVtMztcbiAgfVxuXG4gIHRlc3RNZXRob2QoKSB7XG4gICAgY29uc29sZS5sb2coJ1RoaXMgaXMgZnJvbSB0aGUgbGlicmFyeScpO1xuICB9XG59XG4iXX0=