import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevepluieComponent } from './relevepluie.component';

describe('RelevepluieComponent', () => {
  let component: RelevepluieComponent;
  let fixture: ComponentFixture<RelevepluieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelevepluieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevepluieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
