import { TestBed, inject } from '@angular/core/testing';

import { PlatformDectorService } from './platform-dector.service';

describe('PlatformDectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatformDectorService]
    });
  });

  it('should be created', inject([PlatformDectorService], (service: PlatformDectorService) => {
    expect(service).toBeTruthy();
  }));
});
