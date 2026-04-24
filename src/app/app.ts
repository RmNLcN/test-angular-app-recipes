import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //title = `Recipes`;
  protected readonly title = signal(`Recipes`);
  /*signal('test-angular-app-recipes')*/
}
