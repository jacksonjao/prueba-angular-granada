import { TestBed } from '@angular/core/testing';

import { DataHeaderService } from './data-header.service';

describe('DataHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataHeaderService = TestBed.get(DataHeaderService);
    expect(service).toBeTruthy();
  });
});
