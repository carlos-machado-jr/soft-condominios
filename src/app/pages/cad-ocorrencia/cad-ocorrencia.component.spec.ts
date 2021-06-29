import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadOcorrenciaComponent } from './cad-ocorrencia.component';

describe('CadOcorrenciaComponent', () => {
  let component: CadOcorrenciaComponent;
  let fixture: ComponentFixture<CadOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadOcorrenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
