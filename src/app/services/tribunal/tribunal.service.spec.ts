import { TestBed, inject } from '@angular/core/testing';

import { TribunalService } from './tribunal.service';

describe('TribunalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TribunalService]
    });
  });

  it('should be created', inject([TribunalService], (service: TribunalService) => {
    expect(service).toBeTruthy();
  }));
});
