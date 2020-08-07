import { TestModuleMetadata } from '@angular/core/testing';
export declare abstract class AbstractTestBed {
    static useProvider(moduleMetaData: TestModuleMetadata, provider: any): void;
    static setup(updateModuleMetaData?: (moduleMetaData: TestModuleMetadata) => void): Promise<any>;
    static getModuleMetaData(): TestModuleMetadata;
}
