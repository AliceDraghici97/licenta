import { TestBed } from '@angular/core/testing';

import { ProdusService } from './produs.service';

describe('ProdusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdusService = TestBed.get(ProdusService);
    expect(service).toBeTruthy();
  });
});
