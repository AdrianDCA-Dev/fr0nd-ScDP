import { TestBed, inject } from '@angular/core/testing';

import { DefensaService } from './defensa.service';

describe('DefensaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefensaService]
    });
  });

  it('should be created', inject([DefensaService], (service: DefensaService) => {
    expect(service).toBeTruthy();
  }));
});
