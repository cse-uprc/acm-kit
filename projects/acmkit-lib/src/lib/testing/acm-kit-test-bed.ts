import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestModuleMetadata } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AcmkitLibModule } from '../acmkit-lib.module';
import { AbstractTestBed } from './abstract-test-bed';

export class AcmKitTestBed extends AbstractTestBed {
  static getModuleMetaData(): TestModuleMetadata {
    return {
      imports: [
        RouterTestingModule,
        CommonModule,
        HttpClientTestingModule,
        AcmkitLibModule,
      ],
      declarations: [],
    };
  }
}
