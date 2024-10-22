import { Component } from '@angular/core';
import {environment} from './../.././../environments/environment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  userImgUrl= environment.userProfile;
}
