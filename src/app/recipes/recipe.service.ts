import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.motel";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
        new Recipe(
          'Tasty Schnitzel',
          "A super tasty schnitzel - just awesome !",
          "https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/16:9/w_1280,c_limit/chicken-schnitzel.jpg",
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20),
          ]
        ),
        new Recipe(
          'A Burger',
          "What else you need to say?",
          'https://static.onecms.io/wp-content/uploads/sites/9/2021/05/19/urdaburger-FT-RECIPE0621.jpg',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1),
          ]
        )
    ];

    constructor(private shoppingService: ShoppingService){}

    getRecipes = () => {
      return this.recipes.slice()
    }

    addIngredientsToShoppingList = (ingredients: Ingredient[]) => {
      this.shoppingService.addIngredients(ingredients)
    }

}
