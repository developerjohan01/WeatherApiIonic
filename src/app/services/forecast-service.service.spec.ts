import { TestBed } from '@angular/core/testing';

import { ForecastService } from './forecast.service';

describe('ForecastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForecastService = TestBed.get(ForecastService);
    expect(service).toBeTruthy();
  });

  it('should return the base URL', () => {
    const service: ForecastService = TestBed.get(ForecastService);
    //expect(bui).toBeTruthy();
  });

});
