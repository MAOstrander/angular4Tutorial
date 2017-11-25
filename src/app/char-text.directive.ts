import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[charText]'
})
export class CharTextDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'chartreuse'
  }

  @HostListener('document:click', ['$event']) elemClicked(elem) {
    console.log("clicked", elem)
  }

}
