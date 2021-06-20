import { TestBed } from '@angular/core/testing';

import { AutentiticacaoService } from './autentiticacao.service';

describe('AutentiticacaoService', () => {
  let service: AutentiticacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentiticacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
