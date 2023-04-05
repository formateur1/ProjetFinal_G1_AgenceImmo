import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreByIdComponent } from './offre-by-id.component';

describe('OffreByIdComponent', () => {
  let component: OffreByIdComponent;
  let fixture: ComponentFixture<OffreByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
