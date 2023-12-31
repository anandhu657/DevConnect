import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard {
  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}
