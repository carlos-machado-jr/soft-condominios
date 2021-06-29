import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadDocumentosComponent } from './cad-documentos.component';

describe('CadDocumentosComponent', () => {
  let component: CadDocumentosComponent;
  let fixture: ComponentFixture<CadDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadDocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
