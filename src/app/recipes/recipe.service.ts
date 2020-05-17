import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
 
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a testt','https://i.ytimg.com/vi/3Vf2uPmP2gU/maxresdefault.jpg',
        [
          new Ingredient('Meat',1),
          new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe', 'This is simply a testt','https://i.ytimg.com/vi/3Vf2uPmP2gU/maxresdefault.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ])
      ];     

      getRecipes() {
          return this.recipes.slice();
      }
}