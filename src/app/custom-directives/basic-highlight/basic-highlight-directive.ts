import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appHighlight]'

})

export class BasicHighlightDirective implements OnInit{

    constructor(private elementRef: ElementRef){
        elementRef
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.font = "bold 20px serif";

       
    }
}