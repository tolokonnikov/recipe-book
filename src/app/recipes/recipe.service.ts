import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Steak',
      'Tasty',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F31%2F16354-easy-meatloaf-mfs-74-1x1-1.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Franch Fries', 2)]
    ),
    new Recipe(
      'Steak 2',
      'Tasty many more',
      'https://www.safeway.ca/wp-content/uploads/2020/11/spiced-strip-loin-steak.jpg',
      [new Ingredient('Meat cool', 2), new Ingredient('Franch Fries salt', 3)]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
