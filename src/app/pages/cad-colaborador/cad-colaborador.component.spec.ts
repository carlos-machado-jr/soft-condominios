import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadColaboradorComponent } from './cad-colaborador.component';

describe('CadColaboradorComponent', () => {
  let component: CadColaboradorComponent;
  let fixture: ComponentFixture<CadColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
