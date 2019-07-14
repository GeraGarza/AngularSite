import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg', ['1', '3']),
    new Recipe('A Test Recipe2', 'This is a test', 'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg', ['1', '3']),
    new Recipe('A Test Recipe3', 'This is a test', 'https://www.adorama.com/alc/wp-content/uploads/2018/02/shutterstock_591809333-825x465.jpg', ['1', '3'])

  ];

  showRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }



  constructor() { }

  ngOnInit() {
  }

}
