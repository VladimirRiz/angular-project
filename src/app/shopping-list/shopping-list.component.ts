import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.motel';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = []
  constructor(private shoppingListService: ShoppingService) {
   }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    )
  }

}
