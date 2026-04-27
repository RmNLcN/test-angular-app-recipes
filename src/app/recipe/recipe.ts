import { Component } from '@angular/core';
import { RecipeType } from '../recipe-type/recipe-type';
import { RecipeTypeInfos } from '../recipetype';

@Component({
  selector: 'app-recipe',
  imports: [RecipeType],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe {
  readonly baseUrl: string = `pictures`;

  recipeType: RecipeTypeInfos = {
    id: 1,
    name: 'Apple Pie',
    nbPerson: 4,
    time: 30,
    photo: `${this.baseUrl}/apple-pie.jpg`,
    category: 'Dessert',
    vegan: true,
    instructions: 'Lorem Ispum... '
  };
}
