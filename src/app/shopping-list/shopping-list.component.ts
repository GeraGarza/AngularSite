import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {



  ingredients: Ingredient[]= [
    new Ingredient('Apples', 10),
    new Ingredient('Tea',2),
    new Ingredient('Salt',10)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(newIngredient : Ingredient){
    this.ingredients.push(newIngredient);
  }


}
