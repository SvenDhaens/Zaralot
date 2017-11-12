import { TestBed, inject } from '@angular/core/testing';

import { AtHomeSandboxService } from './at-home-sandbox.service';

describe('AtHomeSandboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtHomeSandboxService]
    });
  });

  it('should be created', inject([AtHomeSandboxService], (service: AtHomeSandboxService) => {
    expect(service).toBeTruthy();
  }));
});
