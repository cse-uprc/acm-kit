import { NgModule } from '@angular/core';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { AngularTestTitleComponent } from './components/angular-test-title/angular-test-title.component';
import { MathService } from './service/math.service';

@NgModule({
  declarations: [AcmkitLibComponent, AngularTestTitleComponent],
  imports: [],
  exports: [AcmkitLibComponent, AngularTestTitleComponent],
  providers: [MathService],
})
export class AcmkitLibModule {}
