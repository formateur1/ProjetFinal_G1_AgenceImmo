import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreComponentComponent } from './offre-component.component';

describe('OffreComponentComponent', () => {
  let component: OffreComponentComponent;
  let fixture: ComponentFixture<OffreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
