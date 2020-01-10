import { TestBed } from '@angular/core/testing';

import { MasinaService } from './masina.service';
describe('MasinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasinaService = TestBed.get(MasinaService);
    expect(service).toBeTruthy();
  });
});
