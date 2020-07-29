import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  constructor() {}

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

  testMethod() {
    console.log('This is from the library');
  }
}
