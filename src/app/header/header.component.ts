import {Component, Output, EventEmitter, ViewEncapsulation} from '@angular/core';


@Component({

    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    //will not do anything, angular creates a unique html for each component. can override
    encapsulation: ViewEncapsulation.Emulated   

})

export class HeaderComponent{


    @Output() featureSelected = new EventEmitter<string>();

    collapsed = true;

    onSelected(feature: string){
       
        this.featureSelected.emit(feature);
    }

}