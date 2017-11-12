import { TestBed, inject } from '@angular/core/testing';

import { SwitchRoutesService } from './switch-routes.service';

describe('SwitchRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwitchRoutesService]
    });
  });

  it('should be created', inject([SwitchRoutesService], (service: SwitchRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
