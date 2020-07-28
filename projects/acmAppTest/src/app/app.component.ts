import { Component, OnInit } from '@angular/core';
import { MathService } from 'dist/acmkit-lib/lib/service/math.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'acmAppTest';
  value = 0;
  constructor(private adder: MathService) {}

  ngOnInit() {
    this.value = this.adder.addNumbers(5, 6);
  }
}
