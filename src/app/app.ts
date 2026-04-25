import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recipe } from './recipe/recipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Recipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //title = `Recipes`;
  protected readonly title = signal(`Recipes`);
  /*signal('test-angular-app-recipes')*/
}
