import { TestBed } from '@angular/core/testing';

import { ManageproductsService } from './manageproducts.service';

describe('ManageproductsService', () => {
  let service: ManageproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
