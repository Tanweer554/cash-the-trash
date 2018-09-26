import { TestBed } from '@angular/core/testing';

import { NoviceService } from './novice.service';

describe('NoviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoviceService = TestBed.get(NoviceService);
    expect(service).toBeTruthy();
  });
});
