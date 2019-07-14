import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedFeature = 'recipe';
  value = 10;

  onNavigate( feature:string){
    console.log(this.selectedFeature);
    this.selectedFeature = feature;
  }

}
