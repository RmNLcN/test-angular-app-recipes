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
  filteredRecipeTypeList: RecipeTypeInfos[] = [];

  constructor() {
    this.recipeTypeList = this.recipeService.getAllRecipes();
    this.filteredRecipeTypeList = this.recipeTypeList;
  }

  filterRecipeTypeResults(text: string) {
    if(!text) {
      this.filteredRecipeTypeList = this.recipeTypeList;
      return;
    }

    this.filteredRecipeTypeList = this.recipeTypeList.filter((recipeType) => 
      recipeType?.category.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
