import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ak-test-component',
  template: `
    <p>
      Library is Working! On Version 1.0.1
    </p>
  `,
  styles: [],
})
export class AcmkitLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
