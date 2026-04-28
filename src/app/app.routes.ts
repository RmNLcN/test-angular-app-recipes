import { Routes } from '@angular/router';
import { Recipe } from './recipe/recipe';
import { RecipeDetails } from './recipe-details/recipe-details';

export const routes: Routes = [
    // Home page
    { path: '', component: Recipe, title: 'Recipes page'},
    // Recipe details page 
    { path: 'recipe/:id', component: RecipeDetails, title: 'Recipe details'},
    // Unknown page -> Home page
    { path: '**', redirectTo: '' }
];
