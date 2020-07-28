import { NgModule } from '@angular/core';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { NumberAdderService } from './service/number-adder.service';

@NgModule({
  declarations: [AcmkitLibComponent],
  imports: [],
  exports: [AcmkitLibComponent],
  providers: [NumberAdderService],
})
export class AcmkitLibModule {}
