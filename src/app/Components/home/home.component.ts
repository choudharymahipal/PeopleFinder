import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  personText= new FormControl('');

  constructor() {}

  startScanning() {
    
    alert(this.personText.value);
  }
}
