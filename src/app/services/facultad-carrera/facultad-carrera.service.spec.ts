import { TestBed, inject } from '@angular/core/testing';

import { FacultadCarreraService } from './facultad-carrera.service';

describe('FacultadCarreraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacultadCarreraService]
    });
  });

  it('should be created', inject([FacultadCarreraService], (service: FacultadCarreraService) => {
    expect(service).toBeTruthy();
  }));
});
