import { Component } from '@angular/core';
import {environment} from '../../../environments/environment';
import { AuthService } from '../../Shared/Services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  userImgUrl= environment.userProfile;

  constructor(private authSvc:AuthService){
    console.log(this.authSvc.isLoggedIn);
  }
}
