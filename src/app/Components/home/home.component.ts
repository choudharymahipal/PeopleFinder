import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../Shared/Services/auth.service';
import { Router } from '@angular/router';
import { CommonService } from '../../Shared/Services/common.service';
import { Ipeople } from '../../Shared/Interfaces/ipeople';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  personText= new FormControl('');
  peopleData:Ipeople[]=[];

  constructor(
    private authSvc:AuthService,
    private router:Router,
    private commonSvc:CommonService
  ) {
    console.log(this.authSvc.isLoggedIn);
  }

  startScanning() {
    this.commonSvc.getAllPeople().subscribe(res=>{
      this.peopleData = res;
    })
  }
}
