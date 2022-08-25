import { TestBed } from '@angular/core/testing';

import { UserDataServicesService } from './user-data-services.service';

describe('UserDataServicesService', () => {
  let service: UserDataServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
