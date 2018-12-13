import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DocenteService } from './docente.service';

describe('DocenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: DocenteService = TestBed.get(DocenteService);
    expect(service).toBeTruthy();
  });

  it('should ...', inject([DocenteService], (service: DocenteService) => {
    expect(service).toBeTruthy();
  }));
});
