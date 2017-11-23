import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[charText]'
})
export class CharTextDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.style.color = 'chartreuse'
  }

}
