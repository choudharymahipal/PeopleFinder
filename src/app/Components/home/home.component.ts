import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../Shared/Services/common.service';
import { Ipeople } from '../../Shared/Interfaces/ipeople';

@Component({
  selector: 'mahi-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  personText = new FormControl('', { nonNullable: true });
  allPeople: Ipeople[] = [];
  peopleData: Ipeople[] = [];
  selectedPerson: Ipeople | null = null;
  isLoading = true;
  loadError = false;
  showAddForm = false;
  editingPersonId: number | null = null;
  addError = '';
  readonly recordForm;

  constructor(private commonSvc: CommonService, formBuilder: FormBuilder) {
    this.recordForm = formBuilder.group({
      name: ['', Validators.required],
      email: [''],
      mobileNo: [''],
      occupationTitle: [''],
      department: [''],
      address: [''],
      city: [''],
      state: [''],
      country: [''],
      pinCode: [''],
      website: [''],
      gitHub: [''],
      linkedIn: [''],
      instagram: [''],
      facebook: [''],
      sourceUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/i)]],
    });
  }

  ngOnInit(): void {
    this.commonSvc.getAllPeople().subscribe((res) => {
      this.allPeople = res;
      this.filterPeople();
      this.isLoading = false;
    }, () => {
      this.loadError = true;
      this.isLoading = false;
    });
  }

  filterPeople(): void {
    const query = this.personText.value.trim().toLocaleLowerCase();
    this.peopleData = (query
      ? this.allPeople.filter((person) =>
          JSON.stringify(person).toLocaleLowerCase().includes(query)
        )
      : [...this.allPeople]).sort((left, right) => left.name.localeCompare(right.name));
  }

  openRecord(person: Ipeople): void {
    this.selectedPerson = person;
  }

  toggleRecordForm(): void {
    if (this.showAddForm) {
      this.resetRecordForm();
      this.showAddForm = false;
      return;
    }
    this.showAddForm = true;
  }

  editPerson(person: Ipeople): void {
    this.selectedPerson = null;
    this.editingPersonId = person.id;
    this.recordForm.patchValue({
      name: person.name,
      email: person.email,
      mobileNo: person.mobileNo,
      occupationTitle: person.occupation.title,
      department: person.occupation.department,
      address: person.completeAddress.address,
      city: person.completeAddress.city,
      state: person.completeAddress.state,
      country: person.completeAddress.country,
      pinCode: person.completeAddress.pinCode,
      website: person.socialLinks.website,
      gitHub: person.socialLinks.gitHub,
      linkedIn: person.socialLinks.linkedIn,
      instagram: person.socialLinks.instagram,
      facebook: person.socialLinks.facebook,
      sourceUrl: person.sourceUrl ?? '',
    });
    this.showAddForm = true;
  }

  closeRecord(): void {
    this.selectedPerson = null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeRecord();
  }

  addPerson(): void {
    this.addError = '';
    if (this.recordForm.invalid) {
      this.recordForm.markAllAsTouched();
      return;
    }

    const value = this.recordForm.getRawValue();
    const clean = (input: string | null): string => (input ?? '').trim();
    const person: Omit<Ipeople, 'id'> = {
      name: clean(value.name),
      email: clean(value.email),
      mobileNo: clean(value.mobileNo),
      imgUrl: '',
      completeAddress: {
        address: clean(value.address),
        city: clean(value.city),
        state: clean(value.state),
        country: clean(value.country),
        pinCode: clean(value.pinCode),
      },
      occupation: {
        title: clean(value.occupationTitle),
        department: clean(value.department),
      },
      socialLinks: {
        website: clean(value.website),
        gitHub: clean(value.gitHub),
        linkedIn: clean(value.linkedIn),
        instagram: clean(value.instagram),
        facebook: clean(value.facebook),
      },
      sourceUrl: clean(value.sourceUrl),
    };

    try {
      if (this.editingPersonId !== null) {
        const updatedPerson = this.commonSvc.updatePerson({ ...person, id: this.editingPersonId });
        this.allPeople = this.allPeople.map((item) => item.id === updatedPerson.id ? updatedPerson : item);
      } else {
        this.allPeople = [...this.allPeople, this.commonSvc.addPerson(person)];
      }
      this.filterPeople();
      this.resetRecordForm();
      this.showAddForm = false;
    } catch {
      this.addError = 'Could not save this record in browser storage.';
    }
  }

  printRecord(): void {
    window.print();
  }

  private resetRecordForm(): void {
    this.recordForm.reset();
    this.editingPersonId = null;
    this.addError = '';
  }
}
