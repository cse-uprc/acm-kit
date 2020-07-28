import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ak-test-component',
  template: `
    <p>
      Library is Working!
    </p>
  `,
  styles: [],
})
export class AcmkitLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
