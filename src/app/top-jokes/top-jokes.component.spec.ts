import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopJokesComponent } from './top-jokes.component';

describe('TopJokesComponent', () => {
  let component: TopJokesComponent;
  let fixture: ComponentFixture<TopJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopJokesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
