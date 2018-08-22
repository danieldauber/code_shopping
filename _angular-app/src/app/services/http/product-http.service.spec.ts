import { TestBed, inject } from '@angular/core/testing';

import { ProductHttp.ServiceService } from './product-http.service.service';

describe('ProductHttp.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductHttp.ServiceService]
    });
  });

  it('should be created', inject([ProductHttp.ServiceService], (service: ProductHttp.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
