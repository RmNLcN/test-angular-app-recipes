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

  recipeTypeList: RecipeTypeInfos[] = 
  [
    {
      id: 0,
      name: 'Apple Pie',
      nbPerson: 4,
      time: 30,
      photo: `${this.baseUrl}/apple-pie.jpg`,
      category: 'Dessert',
      vegan: true,
      instructions: 'Lorem Ispum... '
    },
    {
      id: 1,
      name: 'Cherry Pie',
      nbPerson: 4,
      time: 60,
      photo: `${this.baseUrl}/apple-pie.jpg`,
      category: 'Dessert',
      vegan: true,
      instructions: 'Lorem Ispum... '
    },
    {
      id: 2,
      name: 'Niçoise salad',
      nbPerson: 6,
      time: 20,
      photo: `${this.baseUrl}/apple-pie.jpg`,
      category: 'Starter',
      vegan: false,
      instructions: 'Lorem Ispum... '
    },
    {
      id: 3,
      name: 'Chicken curry',
      nbPerson: 6,
      time: 45,
      photo: `${this.baseUrl}/apple-pie.jpg`,
      category: 'Course',
      vegan: false,
      instructions: 'Lorem Ispum... '
    },
    {
      id: 4,
      name: 'Mixed vegetables',
      nbPerson: 4,
      time: 30,
      photo: `${this.baseUrl}/apple-pie.jpg`,
      category: 'Course',
      vegan: true,
      instructions: 'Lorem Ispum... '
    },
    {
      id: 5,
      name: 'Lasagna',
      nbPerson: 8,
      time: 45,
      photo: `${this.baseUrl}/apple-pie.jpg`,
      category: 'Course',
      vegan: false,
      instructions: 'Lorem Ispum... '
    },
    {
      id: 6,
      name: 'Pissaladière',
      nbPerson: 8,
      time: 50,
      photo: `${this.baseUrl}/apple-pie.jpg`,
      category: 'Starter',
      vegan: false,
      instructions: 'Lorem Ispum... '
    },
    {
      id: 7,
      name: 'Tapenade',
      nbPerson: 6,
      time: 45,
      photo: `${this.baseUrl}/apple-pie.jpg`,
      category: 'Starter',
      vegan: true,
      instructions: 'Lorem Ispum... '
    },
    {
      id: 8,
      name: 'Chocolate mousse',
      nbPerson: 6,
      time: 35,
      photo: `${this.baseUrl}/apple-pie.jpg`,
      category: 'Dessert',
      vegan: false,
      instructions: 'Lorem Ispum... '
    },
    {
      id: 9,
      name: 'Mayonnaise',
      nbPerson: 4,
      time: 30,
      photo: `${this.baseUrl}/apple-pie.jpg`,
      category: 'Sauce',
      vegan: false,
      instructions: 'Lorem Ispum... '
    },
    {
      id: 10,
      name: 'Mustard',
      nbPerson: 4,
      time: 30,
      photo: `${this.baseUrl}/apple-pie.jpg`,
      category: 'Sauce',
      vegan: false,
      instructions: 'Lorem Ispum... '
    },
    {
      id: 11,
      name: 'Brookie',
      nbPerson: 6,
      time: 50,
      photo: `${this.baseUrl}/apple-pie.jpg`,
      category: 'Dessert',
      vegan: false,
      instructions: 'Lorem Ispum... '
    },
  ];
}
