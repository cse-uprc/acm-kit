import { TestBed, TestModuleMetadata } from '@angular/core/testing';

export abstract class AbstractTestBed {
  static useProvider(moduleMetaData: TestModuleMetadata, provider: any) {
    const index = moduleMetaData.providers.findIndex(
      (p) => p.provide === provider || p.provide === provider.provide
    );
    if (index >= 0) {
      moduleMetaData.providers.splice(index, 1);
    }
    moduleMetaData.providers.push(provider);
  }

  static async setup(
    updateModuleMetaData?: (moduleMetaData: TestModuleMetadata) => void
  ): Promise<any> {
    const moduleMetaData = this.getModuleMetaData();
    if (updateModuleMetaData) {
      updateModuleMetaData(moduleMetaData);
    }
    TestBed.configureTestingModule(moduleMetaData);
  }
  static getModuleMetaData(): TestModuleMetadata {
    return null;
  }
}
