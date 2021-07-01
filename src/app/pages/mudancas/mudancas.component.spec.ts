import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MudancasComponent } from './mudancas.component';

describe('MudancasComponent', () => {
  let component: MudancasComponent;
  let fixture: ComponentFixture<MudancasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MudancasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MudancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
