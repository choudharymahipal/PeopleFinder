import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mahi-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router:Router){}

  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
