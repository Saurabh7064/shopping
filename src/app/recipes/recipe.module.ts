import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipesStartComponent,
    RecipesEditComponent
  ],
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipesStartComponent,
    RecipesEditComponent
  ]
})
export class RecipesModule {}
