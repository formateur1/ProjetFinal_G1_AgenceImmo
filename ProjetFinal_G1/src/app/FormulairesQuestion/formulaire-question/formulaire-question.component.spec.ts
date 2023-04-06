import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireQuestionComponent } from './formulaire-question.component';

describe('FormulaireQuestionComponent', () => {
  let component: FormulaireQuestionComponent;
  let fixture: ComponentFixture<FormulaireQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
