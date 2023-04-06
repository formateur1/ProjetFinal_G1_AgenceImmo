import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderUtilisateurComponent } from './valider-utilisateur.component';

describe('ValiderUtilisateurComponent', () => {
  let component: ValiderUtilisateurComponent;
  let fixture: ComponentFixture<ValiderUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValiderUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
