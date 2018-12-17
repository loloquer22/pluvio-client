import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRelevepluieComponent } from './search-relevepluie.component';

describe('SearchRelevepluieComponent', () => {
  let component: SearchRelevepluieComponent;
  let fixture: ComponentFixture<SearchRelevepluieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRelevepluieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRelevepluieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
