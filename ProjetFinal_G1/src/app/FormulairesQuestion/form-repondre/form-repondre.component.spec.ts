import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRepondreComponent } from './form-repondre.component';

describe('FormRepondreComponent', () => {
  let component: FormRepondreComponent;
  let fixture: ComponentFixture<FormRepondreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRepondreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRepondreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
