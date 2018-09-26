import { TestBed } from '@angular/core/testing';

import { TerminateService } from './terminate.service';

describe('TerminateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerminateService = TestBed.get(TerminateService);
    expect(service).toBeTruthy();
  });
});
