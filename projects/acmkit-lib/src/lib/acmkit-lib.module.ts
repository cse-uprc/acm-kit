import { NgModule } from '@angular/core';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { MathService } from './service/math.service';

@NgModule({
  declarations: [AcmkitLibComponent],
  imports: [],
  exports: [AcmkitLibComponent],
  providers: [MathService],
})
export class AcmkitLibModule {}
