import { Component } from '@angular/core';
import { RecipeType } from '../recipe-type/recipe-type';

@Component({
  selector: 'app-recipe',
  imports: [RecipeType],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe {}
