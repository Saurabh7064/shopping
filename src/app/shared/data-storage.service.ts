import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipe() {
        const recipes = this.recipeService.getRecipes();
        return this.http
        .put(
            'https://shopping-194ca.firebaseio.com/recipes.json',
            recipes
            )
        .subscribe(response =>{
            console.log(response);
        })
    }

    fetchRecipes() {
        return this.http
          .get<Recipe[]>(
            'https://shopping-194ca.firebaseio.com/recipes.json',
          )
          .pipe(
            map(recipes => {
              return recipes.map(recipe => {
                return {
                  ...recipe,
                  ingredients: recipe.ingredients ? recipe.ingredients : []
                };
              });
            }),
            tap(recipes => {
              this.recipeService.setRecipes(recipes);
            })
          );
      }  
}