import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGerantComponent } from './form-gerant.component';

describe('FormAdminComponent', () => {
  let component: FormGerantComponent;
  let fixture: ComponentFixture<FormGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGerantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
