import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsGerantComponent } from './propositions-gerant.component';

describe('PropositionsGerantComponent', () => {
  let component: PropositionsGerantComponent;
  let fixture: ComponentFixture<PropositionsGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositionsGerantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropositionsGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
