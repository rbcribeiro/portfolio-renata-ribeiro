import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundInsideComponent } from './background-inside.component';

describe('BackgroundInsideComponent', () => {
  let component: BackgroundInsideComponent;
  let fixture: ComponentFixture<BackgroundInsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundInsideComponent]
    });
    fixture = TestBed.createComponent(BackgroundInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
