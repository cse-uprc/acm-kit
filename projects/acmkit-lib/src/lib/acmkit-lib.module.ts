import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { AngularTestTitleComponent } from './components/angular-test-title/angular-test-title.component';
import { CardComponent } from './components/card/card.component';
import { MathService } from './service/math.service';

@NgModule({
  declarations: [AcmkitLibComponent, AngularTestTitleComponent, CardComponent],
  imports: [BrowserModule, RouterModule.forRoot([])],
  exports: [AcmkitLibComponent, AngularTestTitleComponent, CardComponent],
  providers: [MathService],
})
export class AcmkitLibModule {}
