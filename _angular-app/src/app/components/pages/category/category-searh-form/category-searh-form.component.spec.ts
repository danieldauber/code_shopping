import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySearhFormComponent } from './category-searh-form.component';

describe('CategorySearhFormComponent', () => {
  let component: CategorySearhFormComponent;
  let fixture: ComponentFixture<CategorySearhFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySearhFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySearhFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
