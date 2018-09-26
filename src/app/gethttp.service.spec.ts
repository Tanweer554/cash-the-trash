import { TestBed } from '@angular/core/testing';

import { GethttpService } from './gethttp.service';

describe('GethttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GethttpService = TestBed.get(GethttpService);
    expect(service).toBeTruthy();
  });
});
