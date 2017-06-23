import { TestBed, inject } from '@angular/core/testing';

import { MagnoliaComponentMapperService } from './magnolia-component-mapper.service';

describe('MagnoliaComponentMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagnoliaComponentMapperService]
    });
  });

  it('should be created', inject([MagnoliaComponentMapperService], (service: MagnoliaComponentMapperService) => {
    expect(service).toBeTruthy();
  }));
});
