import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeType } from './recipe-type';

describe('RecipeType', () => {
  let component: RecipeType;
  let fixture: ComponentFixture<RecipeType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeType],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
