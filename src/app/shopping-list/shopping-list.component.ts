import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list-service';
import { LoggingService } from '../logging.service.module';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }> ;
  private subscription: Subscription;

  constructor(private slsService: ShoppingListService,
              private loggingService: LoggingService,
              private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>){}
  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.slsService.getIngredients();
    // this.subscription = this.slsService.ingredientsChanged
    // .subscribe(
    //   (ingredients: Ingredient[])=>{
    //     this.ingredients = ingredients;
    //   }
    // );
    this.loggingService.printLog("Hello from ShoppingListComponent ngOninit");
  }

  onEditItem(index: number) {
    this.slsService.startEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
