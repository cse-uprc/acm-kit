import { TestBed } from '@angular/core/testing';
import { AcmKitTestBed } from '../../testing/acm-kit-test-bed';
import { setupTests } from '../../testing/test-setup';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  setupTests(async () => AcmKitTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
