import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.modetel';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe
  @Output() recipeData = new EventEmitter<void>()

  constructor() { }

  onSelectRecipe = () => {
    this.recipeData.emit()
  }

  ngOnInit(): void {
  }

}
