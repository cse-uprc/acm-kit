import { TestBed } from '@angular/core/testing';
import { AcmKitTestBed } from '../../testing/acm-kit-test-bed';
import { setupTests } from '../../testing/test-setup';

import { ParticlesService } from './particles.service';

describe('ParticlesService', () => {
  let service: ParticlesService;

  setupTests(async () => AcmKitTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(ParticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
