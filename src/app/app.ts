import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Recipe } from './recipe/recipe';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, Recipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //title = `Recipes`;
  protected readonly title = signal(`Recipes`);
  /*signal('test-angular-app-recipes')*/
}
