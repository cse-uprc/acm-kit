import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ak-angular-test-title',
  templateUrl: './angular-test-title.component.html',
  styleUrls: ['./angular-test-title.component.scss'],
})
export class AngularTestTitleComponent implements OnInit {
  @Input() titleText = 'Angular Testing';
  constructor() {}

  ngOnInit(): void {}
}
