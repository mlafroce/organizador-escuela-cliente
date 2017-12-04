/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModuloService } from './modulo.service';

describe('ModuloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuloService]
    });
  });

  it('should ...', inject([ModuloService], (service: ModuloService) => {
    expect(service).toBeTruthy();
  }));
});
