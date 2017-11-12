import { TestBed, inject } from '@angular/core/testing';

import { CuServersService } from './cu-servers.service';

describe('CuServersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuServersService]
    });
  });

  it('should be created', inject([CuServersService], (service: CuServersService) => {
    expect(service).toBeTruthy();
  }));
});
