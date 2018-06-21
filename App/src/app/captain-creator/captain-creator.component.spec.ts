import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainCreatorComponent } from './captain-creator.component';

describe('CaptainCreatorComponent', () => {
  let component: CaptainCreatorComponent;
  let fixture: ComponentFixture<CaptainCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
