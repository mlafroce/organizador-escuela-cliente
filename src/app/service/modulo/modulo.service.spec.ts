import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ModuloService } from './modulo.service';

describe('ModuloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuloService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', () => {
    const service: ModuloService = TestBed.get(ModuloService);
    expect(service).toBeTruthy();
  });

  it('should ...', inject([ModuloService], (service: ModuloService) => {
    expect(service).toBeTruthy();
  }));
});
