import { Component, input } from '@angular/core';
import { RecipeTypeInfos } from '../recipetype';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-recipe-type',
  imports: [RouterLink],
  templateUrl: './recipe-type.html',
  styleUrl: './recipe-type.css',
})
export class RecipeType {
  recipeType = input.required<RecipeTypeInfos>();
}
