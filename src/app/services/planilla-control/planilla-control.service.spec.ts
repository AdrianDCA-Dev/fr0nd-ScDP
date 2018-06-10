import { TestBed, inject } from '@angular/core/testing';

import { PlanillaControlService } from './planilla-control.service';

describe('PlanillaControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanillaControlService]
    });
  });

  it('should be created', inject([PlanillaControlService], (service: PlanillaControlService) => {
    expect(service).toBeTruthy();
  }));
});
