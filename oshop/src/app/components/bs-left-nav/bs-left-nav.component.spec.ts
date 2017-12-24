import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsLeftNavComponent } from './bs-left-nav.component';

describe('BsLeftNavComponent', () => {
  let component: BsLeftNavComponent;
  let fixture: ComponentFixture<BsLeftNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsLeftNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
