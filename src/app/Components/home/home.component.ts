import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../Shared/Services/auth.service';
import { Router } from '@angular/router';
import { CommonService } from '../../Shared/Services/common.service';
import { Ipeople } from '../../Shared/Interfaces/ipeople';

@Component({
  selector: 'mahi-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  personText = new FormControl(''); //contain search string
  peopleData: Ipeople[] = []; //all people data
  personData!: Ipeople; //single profile
  modalHeader: string = '';

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private commonSvc: CommonService
  ) {
    console.log(this.authSvc.isLoggedIn);
  }

  startScanning() {
    this.commonSvc.getAllPeople().subscribe((res) => {
      this.peopleData = res;
    });
  }

  fillData(item: Ipeople) {
    this.personData = item;
    this.modalHeader = item.name;
  }
}
