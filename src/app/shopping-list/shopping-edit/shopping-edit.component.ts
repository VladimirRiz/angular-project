import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.motel';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) nameInputRef!: ElementRef
  @ViewChild('amountInput', {static:false}) amountInputRef!: ElementRef
  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  onAddItem(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount)
    this.ingredientAdded.emit(newIngredient)
  }

  ngOnInit(): void {
  }

}
