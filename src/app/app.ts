import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.html',
  template: `<h1>Hello World !</h1>`,
  styleUrl: './app.css'
})
export class App {
  title = `Recipes`;
  // protected readonly title = signal('test-angular-app-recipes');
}
