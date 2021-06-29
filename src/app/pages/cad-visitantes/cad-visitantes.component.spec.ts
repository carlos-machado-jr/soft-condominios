import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadVisitantesComponent } from './cad-visitantes.component';

describe('CadVisitantesComponent', () => {
  let component: CadVisitantesComponent;
  let fixture: ComponentFixture<CadVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadVisitantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
