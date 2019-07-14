import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:true}) name : ElementRef;
  @ViewChild('amountInput', {static:true}) amount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }



  onAddIngredient(){
    
    const newIngredient = new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value);
    console.log(newIngredient);
    this.ingredientAdded.emit(newIngredient);
  }
 

}
