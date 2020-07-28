import { Component, OnInit } from '@angular/core';
import { NumberAdderService } from 'acmkit-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'acmAppTest';
  value = 0;
  constructor(private adder: NumberAdderService) {}

  ngOnInit() {
    this.value = this.adder.addNumbers(5, 6);
  }
}
