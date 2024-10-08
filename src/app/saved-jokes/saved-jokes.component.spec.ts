import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedJokesComponent } from './saved-jokes.component';

describe('SavedJokesComponent', () => {
  let component: SavedJokesComponent;
  let fixture: ComponentFixture<SavedJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedJokesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
