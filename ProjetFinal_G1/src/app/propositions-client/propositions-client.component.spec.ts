import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsClientComponent } from './propositions-client.component';

describe('PropositionsClientComponent', () => {
  let component: PropositionsClientComponent;
  let fixture: ComponentFixture<PropositionsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositionsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropositionsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
