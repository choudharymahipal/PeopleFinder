import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mahi-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authSvc: AuthService,private router:Router) {}

  OnSubmit() {
    this.authSvc.isLoggedIn = true;
    this.router.navigateByUrl("/");
  }
}
