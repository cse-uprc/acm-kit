import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AcmkitLibComponent, CardComponent],
  imports: [BrowserModule, RouterModule],
  exports: [AcmkitLibComponent, CardComponent],
  providers: [],
})
export class AcmkitLibModule {}
