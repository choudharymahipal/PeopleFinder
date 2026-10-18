import { FormBuilder } from '@angular/forms';
import { HomeComponent } from './home.component';
import { Ipeople } from '../../Shared/Interfaces/ipeople';
import { CommonService } from '../../Shared/Services/common.service';

describe('HomeComponent', () => {
  let component: HomeComponent;

  beforeEach(() => {
    component = new HomeComponent({} as CommonService, new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filters records by nested occupation and social account fields', () => {
    component.allPeople = [
      makePerson(1, 'Avery Chen', 'Security Analyst', 'avery.codes'),
      makePerson(2, 'Morgan Lee', 'Researcher', 'morgan-data'),
    ];

    component.personText.setValue('avery.codes');
    component.filterPeople();

    expect(component.peopleData.map((person) => person.id)).toEqual([1]);

    component.personText.setValue('security analyst');
    component.filterPeople();

    expect(component.peopleData.map((person) => person.id)).toEqual([1]);
  });

  it('returns all records when the search query is cleared', () => {
    component.allPeople = [makePerson(1, 'Avery Chen', 'Analyst', '')];
    component.personText.setValue('no match');
    component.filterPeople();
    expect(component.peopleData).toHaveSize(0);

    component.personText.setValue('');
    component.filterPeople();
    expect(component.peopleData.length).toBe(1);
  });
});

function makePerson(id: number, name: string, occupation: string, gitHub: string): Ipeople {
  return {
    id,
    name,
    email: '',
    mobileNo: '',
    imgUrl: '',
    completeAddress: { address: '', city: '', state: '', country: '', pinCode: '' },
    occupation: { title: occupation, department: '' },
    socialLinks: { website: '', gitHub, linkedIn: '', instagram: '', facebook: '' },
  };
}
