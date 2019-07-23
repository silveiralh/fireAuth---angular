import { TestBed } from '@angular/core/testing';

import { RegistroDataService } from './registro-data.service';

describe('RegistroDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroDataService = TestBed.get(RegistroDataService);
    expect(service).toBeTruthy();
  });
});
