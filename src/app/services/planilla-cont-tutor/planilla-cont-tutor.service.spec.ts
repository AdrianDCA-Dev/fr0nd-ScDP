import { TestBed, inject } from '@angular/core/testing';

import { PlanillaContTutorService } from './planilla-cont-tutor.service';

describe('PlanillaContTutorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanillaContTutorService]
    });
  });

  it('should be created', inject([PlanillaContTutorService], (service: PlanillaContTutorService) => {
    expect(service).toBeTruthy();
  }));
});
