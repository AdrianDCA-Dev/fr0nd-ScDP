import { TestBed, inject } from '@angular/core/testing';

import { ModalidadService } from './modalidad.service';

describe('ModalidadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalidadService]
    });
  });

  it('should be created', inject([ModalidadService], (service: ModalidadService) => {
    expect(service).toBeTruthy();
  }));
});
