import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSectionsComponent } from './double-sections.component';

describe('DoubleSectionsComponent', () => {
  let component: DoubleSectionsComponent;
  let fixture: ComponentFixture<DoubleSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
