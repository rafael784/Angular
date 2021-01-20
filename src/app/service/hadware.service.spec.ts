import { TestBed, inject } from '@angular/core/testing';

import { HadwareService } from './hadware.service';

describe('HadwareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HadwareService]
    });
  });

  it('should be created', inject([HadwareService], (service: HadwareService) => {
    expect(service).toBeTruthy();
  }));
});
