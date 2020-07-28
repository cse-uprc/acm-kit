import { TestBed } from '@angular/core/testing';
import { NumberAdderService } from './number-adder.service';

describe('NumberAdderService', () => {
  let service: NumberAdderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberAdderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
