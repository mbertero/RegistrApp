import { TestBed } from '@angular/core/testing';

import { CanActivateRouteGuard } from './can-activate-route.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CanActivateRouteGuard', () => {
  let guard: CanActivateRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    guard = TestBed.inject(CanActivateRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});