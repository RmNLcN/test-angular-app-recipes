import { Component, inject } from '@angular/core';
import { RecipeType } from '../recipe-type/recipe-type';
import { RecipeTypeInfos } from '../recipetype';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  imports: [RecipeType],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe {
  recipeTypeList: RecipeTypeInfos[] = [];
  recipeService: RecipeService = inject(RecipeService);

  constructor() {
    this.recipeTypeList = this.recipeService.getAllRecipes();
  }
}
