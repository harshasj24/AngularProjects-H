import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[bgColor]',
})
export class CustomDirDirective {
  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.background = localStorage.getItem('bg');
  }
}
