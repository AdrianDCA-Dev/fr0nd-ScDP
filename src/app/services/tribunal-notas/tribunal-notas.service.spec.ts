import { TestBed, inject } from '@angular/core/testing';

import { TribunalNotasService } from './tribunal-notas.service';

describe('TribunalNotasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TribunalNotasService]
    });
  });

  it('should be created', inject([TribunalNotasService], (service: TribunalNotasService) => {
    expect(service).toBeTruthy();
  }));
});
