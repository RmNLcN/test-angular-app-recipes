import { Component, input } from '@angular/core';
import { RecipeTypeInfos } from '../recipetype';

@Component({
  selector: 'app-recipe-type',
  imports: [],
  templateUrl: './recipe-type.html',
  styleUrl: './recipe-type.css',
})
export class RecipeType {
  recipeType = input.required<RecipeTypeInfos>();
}
