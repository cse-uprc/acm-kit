import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  constructor() {}

  addNumbers(num1, num2) {
    return num1 + num2;
  }

  subtractNumbes(num1, num2) {
    return num1 - num2;
  }

  multiplyNumbers(num1, num2) {
    return num1 * num2;
  }
}
