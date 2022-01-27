import { TestBed } from '@angular/core/testing';

import { InterceptorRequestService } from './interceptor-request.service';

describe('InterceptorRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptorRequestService = TestBed.get(InterceptorRequestService);
    expect(service).toBeTruthy();
  });
});
