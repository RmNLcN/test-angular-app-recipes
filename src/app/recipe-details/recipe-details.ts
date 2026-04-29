import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { RecipeTypeInfos } from '../recipetype';

@Component({
  selector: 'app-recipe-details',
  imports: [],
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.css',
})
export class RecipeDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  recipeService = inject(RecipeService);
  recipeType: RecipeTypeInfos | undefined;

  constructor() {
    const recipeTypeId = Number(this.route.snapshot.params['id']);
    this.recipeType = this.recipeService.getRecipeById(recipeTypeId);
  }
}
