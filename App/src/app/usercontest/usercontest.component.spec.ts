import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercontestComponent } from './usercontest.component';

describe('UsercontestComponent', () => {
  let component: UsercontestComponent;
  let fixture: ComponentFixture<UsercontestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercontestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
