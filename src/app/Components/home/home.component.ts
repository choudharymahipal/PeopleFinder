import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../Shared/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  personText= new FormControl('');

  constructor(private authSvc:AuthService,private router:Router) {
    console.log(this.authSvc.isLoggedIn);
  }

  startScanning() {
    alert(this.personText.value);
  }
}
