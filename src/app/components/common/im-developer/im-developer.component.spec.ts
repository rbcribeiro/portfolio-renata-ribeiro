import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImDeveloperComponent } from './im-developer.component';

describe('ImDeveloperComponent', () => {
  let component: ImDeveloperComponent;
  let fixture: ComponentFixture<ImDeveloperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImDeveloperComponent]
    });
    fixture = TestBed.createComponent(ImDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
