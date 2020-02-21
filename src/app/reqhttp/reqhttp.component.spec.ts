import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqhttpComponent } from './reqhttp.component';

describe('ReqhttpComponent', () => {
  let component: ReqhttpComponent;
  let fixture: ComponentFixture<ReqhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
