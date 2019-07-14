import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {



  @Input() defaultColor : string = 'transparent';
  @Input() highlightColor : string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';
  constructor(private elRef: ElementRef,private renderer: Renderer2) { }


  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

 

  @HostListener('mouseenter') mouseover(eventDate:Event){
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseout(eventDate:Event){
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.defaultColor;
  }
  

}
