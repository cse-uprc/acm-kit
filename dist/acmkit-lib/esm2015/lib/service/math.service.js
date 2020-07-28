import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MathService {
    constructor() { }
    addNumbers(num1, num2) {
        return num1 + num2;
    }
    subtractNumbers(num1, num2) {
        return num1 - num2;
    }
    multiplyNumbers(num1, num2) {
        return num1 * num2;
    }
    addThreeNumbers(num1, num2, num3) {
        return num1 + num2 + num3;
    }
}
MathService.ɵfac = function MathService_Factory(t) { return new (t || MathService)(); };
MathService.ɵprov = i0.ɵɵdefineInjectable({ token: MathService, factory: MathService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MathService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWNta2l0LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL21hdGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sV0FBVztJQUN0QixnQkFBZSxDQUFDO0lBRWhCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSTtRQUNuQixPQUFPLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSTtRQUN4QixPQUFPLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSTtRQUN4QixPQUFPLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7UUFDOUIsT0FBTyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDOztzRUFqQlUsV0FBVzttREFBWCxXQUFXLFdBQVgsV0FBVyxtQkFGVixNQUFNO2tEQUVQLFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWF0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkTnVtYmVycyhudW0xLCBudW0yKSB7XG4gICAgcmV0dXJuIG51bTEgKyBudW0yO1xuICB9XG5cbiAgc3VidHJhY3ROdW1iZXJzKG51bTEsIG51bTIpIHtcbiAgICByZXR1cm4gbnVtMSAtIG51bTI7XG4gIH1cblxuICBtdWx0aXBseU51bWJlcnMobnVtMSwgbnVtMikge1xuICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgfVxuXG4gIGFkZFRocmVlTnVtYmVycyhudW0xLCBudW0yLCBudW0zKSB7XG4gICAgcmV0dXJuIG51bTEgKyBudW0yICsgbnVtMztcbiAgfVxufVxuIl19