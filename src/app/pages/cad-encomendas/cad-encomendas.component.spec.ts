import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEncomendasComponent } from './cad-encomendas.component';

describe('CadEncomendasComponent', () => {
  let component: CadEncomendasComponent;
  let fixture: ComponentFixture<CadEncomendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadEncomendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadEncomendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
