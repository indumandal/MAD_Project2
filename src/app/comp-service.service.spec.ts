import { TestBed } from '@angular/core/testing';

import { CompServiceService } from './comp-service.service';

describe('CompServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompServiceService = TestBed.get(CompServiceService);
    expect(service).toBeTruthy();
  });
});
