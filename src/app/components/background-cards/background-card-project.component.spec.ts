import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundCardProjectComponent } from './background-card-project.component';

describe('BackgroundCardProjectComponent', () => {
  let component: BackgroundCardProjectComponent;
  let fixture: ComponentFixture<BackgroundCardProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundCardProjectComponent]
    });
    fixture = TestBed.createComponent(BackgroundCardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
