import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFilterMenu]'
})
export class FilterMenuDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click')
  onClick() {
    const element: any = document.getElementById('filterOption');
    const hasClass = element.classList.contains('d-none');
    console.log(hasClass, "kk")
    console.log(element)
    if (hasClass) {
      element.classList.remove('d-none');
    } else {
      element.classList.add('d-none');
    }
  }
}
