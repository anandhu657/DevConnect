import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHambergerMenu]'
})
export class HambergerMenuDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') toggleMenu() {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse) {
      navbarCollapse.classList.toggle('show');
    }
    this.elementRef.nativeElement.classList.toggle('open');
  }
}
