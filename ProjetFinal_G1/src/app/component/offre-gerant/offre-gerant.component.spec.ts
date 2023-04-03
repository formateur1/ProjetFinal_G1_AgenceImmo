import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreGerantComponent } from './offre-gerant.component';

describe('OffreGerantComponent', () => {
  let component: OffreGerantComponent;
  let fixture: ComponentFixture<OffreGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreGerantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
