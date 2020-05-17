import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
 
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test','https://i.ytimg.com/vi/3Vf2uPmP2gU/maxresdefault.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test','https://i.ytimg.com/vi/3Vf2uPmP2gU/maxresdefault.jpg')
      ];     

      getRecipes() {
          return this.recipes.slice();
      }
}