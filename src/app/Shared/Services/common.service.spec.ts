import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CommonService } from './common.service';
import { Ipeople } from '../Interfaces/ipeople';

describe('CommonService', () => {
  let service: CommonService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    localStorage.removeItem('people-finder-records');
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(CommonService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
    localStorage.removeItem('people-finder-records');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('persists new records locally with an ID after the seeded entries', () => {
    const record = service.addPerson({
      name: 'Avery Chen',
      email: '',
      mobileNo: '',
      imgUrl: '',
      completeAddress: { address: '', city: '', state: '', country: '', pinCode: '' },
      occupation: { title: '', department: '' },
      socialLinks: { website: '', gitHub: '', linkedIn: '', instagram: '', facebook: '' },
      sourceUrl: 'https://example.org/profile',
    });

    expect(record.id).toBe(3);
    expect(JSON.parse(localStorage.getItem('people-finder-records') || '[]')).toContain(record);
  });

  it('loads local edits as overrides and retains untouched seed records', () => {
    const firstSeed = makePerson(1, 'Original Name');
    const secondSeed = makePerson(2, 'Other Person');
    service.updatePerson({ ...firstSeed, name: 'Updated Name', sourceUrl: 'https://example.org/source' });
    let loadedRecords: Ipeople[] = [];

    service.getAllPeople().subscribe((records) => loadedRecords = records);
    httpTesting.expectOne('./assets/db/people.json').flush([firstSeed, secondSeed]);

    expect(loadedRecords.map((record) => record.name)).toEqual(['Updated Name', 'Other Person']);
  });
});

function makePerson(id: number, name: string): Ipeople {
  return {
    id,
    name,
    email: '',
    mobileNo: '',
    imgUrl: '',
    completeAddress: { address: '', city: '', state: '', country: '', pinCode: '' },
    occupation: { title: '', department: '' },
    socialLinks: { website: '', gitHub: '', linkedIn: '', instagram: '', facebook: '' },
  };
}
