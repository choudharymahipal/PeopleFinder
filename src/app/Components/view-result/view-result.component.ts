import { Component, Input } from '@angular/core';
import { Ipeople } from '../../Shared/Interfaces/ipeople';

@Component({
  selector: 'mahi-view-result',
  templateUrl: './view-result.component.html',
  styleUrl: './view-result.component.scss',
})
export class ViewResultComponent {
  @Input() personData!: Ipeople;

  constructor() {}

  ngOnInit(): void {}
}
