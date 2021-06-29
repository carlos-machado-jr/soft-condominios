import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadVisitanteComponent } from './cad-visitante.component';

describe('CadVisitanteComponent', () => {
  let component: CadVisitanteComponent;
  let fixture: ComponentFixture<CadVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadVisitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
