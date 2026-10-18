import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Ipeople } from '../../Shared/Interfaces/ipeople';

import { ViewResultComponent } from './view-result.component';

describe('ViewResultComponent', () => {
  let component: ViewResultComponent;
  let fixture: ComponentFixture<ViewResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ViewResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewResultComponent);
    component = fixture.componentInstance;
    component.personData = {
      id: 1,
      name: 'Avery Chen',
      email: '',
      mobileNo: '',
      imgUrl: '',
      completeAddress: { address: '', city: '', state: '', country: '', pinCode: '' },
      occupation: { title: '', department: '' },
      socialLinks: { website: '', gitHub: '', linkedIn: '', instagram: '', facebook: '' },
    } as Ipeople;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
