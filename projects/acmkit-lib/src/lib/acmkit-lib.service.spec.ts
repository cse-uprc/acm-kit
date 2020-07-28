import { TestBed } from '@angular/core/testing';
import { AcmkitLibService } from './acmkit-lib.service';

describe('AcmkitLibService', () => {
  let service: AcmkitLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcmkitLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
