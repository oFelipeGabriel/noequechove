import { TestBed } from '@angular/core/testing';

import { HgbrasilService } from './hgbrasil.service';

describe('HgbrasilService', () => {
  let service: HgbrasilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HgbrasilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
