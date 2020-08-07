import { CommonModule } from '@angular/common';
import { TestModuleMetadata } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AbstractTestBed } from './abstract-test-bed';

export class AcmKitTestBed extends AbstractTestBed {
  static getModuleMetaData(): TestModuleMetadata {
    return {
      imports: [RouterTestingModule, CommonModule],
      declarations: [],
    };
  }
}
