import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  private activeDropdown!: HTMLElement;
  private dropdownMenu!: HTMLElement;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.dropdownMenu = this.elementRef.nativeElement.querySelector('.dropdown-menu');
    if (this.activeDropdown && this.activeDropdown !== this.dropdownMenu) {
      this.renderer.removeClass(this.activeDropdown, 'show');
    }
    const hasClass = this.dropdownMenu.classList.contains('show');
    this.activeDropdown = this.dropdownMenu;
    
    if (hasClass) {
      this.dropdownMenu.classList.remove('show');
    } else {
      this.dropdownMenu.classList.add('show');
    }
  }
}
