import { NgModule } from '@angular/core';
import { AcmkitLibComponent } from './acmkit-lib.component';
import { TestFolderComponent } from './test-folder/test-folder.component';

@NgModule({
  declarations: [AcmkitLibComponent, TestFolderComponent],
  imports: [],
  exports: [AcmkitLibComponent, TestFolderComponent],
})
export class AcmkitLibModule {}
