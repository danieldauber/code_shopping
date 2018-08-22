import { TestBed, inject } from '@angular/core/testing';

import { UserHttp.ServiceService } from './user-http.service.service';

describe('UserHttp.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserHttp.ServiceService]
    });
  });

  it('should be created', inject([UserHttp.ServiceService], (service: UserHttp.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
