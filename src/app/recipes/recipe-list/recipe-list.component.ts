import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://i.ytimg.com/vi/3Vf2uPmP2gU/maxresdefault.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test','https://i.ytimg.com/vi/3Vf2uPmP2gU/maxresdefault.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log("onRecipeSelected",recipe);
    
    this.recipeWasSelected.emit(recipe);
  }

}
