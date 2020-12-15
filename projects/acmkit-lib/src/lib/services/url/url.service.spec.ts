import { TestBed } from '@angular/core/testing';

import { UrlService } from './url.service';
import { AcmKitTestBed } from '../../testing/acm-kit-test-bed';
import { setupTests } from '../../testing/test-setup';

describe('UrlService', () => {
  let service: UrlService;

  setupTests(async () => AcmKitTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(UrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
