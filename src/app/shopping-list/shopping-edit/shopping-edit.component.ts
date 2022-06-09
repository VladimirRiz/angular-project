import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.motel';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) nameInputRef!: ElementRef
  @ViewChild('amountInput', {static:false}) amountInputRef!: ElementRef

 constructor(private shoppingService: ShoppingService) {
   }

  onAddItem(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name,amount)
    this.shoppingService.addIngredient(newIngredient)
  }

  ngOnInit(): void {
  }

}
