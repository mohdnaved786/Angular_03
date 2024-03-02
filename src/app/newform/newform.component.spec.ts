import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewformComponent } from './newform.component';

describe('NewformComponent', () => {
  let component: NewformComponent;
  let fixture: ComponentFixture<NewformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewformComponent]
    });
    fixture = TestBed.createComponent(NewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
