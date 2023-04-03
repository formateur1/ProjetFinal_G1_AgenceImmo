import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerantComponentComponent } from './gerant-component.component';

describe('GerantComponentComponent', () => {
  let component: GerantComponentComponent;
  let fixture: ComponentFixture<GerantComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerantComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
