import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // has to share nane of directive/ selector
  //method, still a property, just a setter of propery. executes when changes outside of directive 
  @Input() set appUnless(condition: boolean) {
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      //if not what we want, remove from DOM
      this.vcRef.clear();
    }
  }
                  // what (template HTML code)            where? 
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { 
  }

}
