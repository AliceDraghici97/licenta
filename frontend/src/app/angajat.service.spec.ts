import { TestBed } from '@angular/core/testing';

import { AngajatService } from './angajat.service';

describe('AngajatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngajatService = TestBed.get(AngajatService);
    expect(service).toBeTruthy();
  });
});
