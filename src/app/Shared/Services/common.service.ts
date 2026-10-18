import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ipeople } from '../Interfaces/ipeople';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private readonly storageKey = 'people-finder-records';

  constructor(private http: HttpClient) {}

  getAllPeople(): Observable<Ipeople[]> {
    return this.http
      .get<Ipeople[]>('./assets/db/people.json')
      .pipe(map((records) => this.mergeLocalRecords(records)));
  }

  addPerson(person: Omit<Ipeople, 'id'>): Ipeople {
    const records = this.getLocalRecords();
    const allIds = records.map((record) => record.id);
    const record: Ipeople = {
      ...person,
      id: Math.max(0, ...allIds, 2) + 1,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(this.storageKey, JSON.stringify([...records, record]));
    return record;
  }

  updatePerson(person: Ipeople): Ipeople {
    const updatedPerson = { ...person, updatedAt: new Date().toISOString() };
    const records = this.getLocalRecords().filter((record) => record.id !== person.id);
    localStorage.setItem(this.storageKey, JSON.stringify([...records, updatedPerson]));
    return updatedPerson;
  }

  private mergeLocalRecords(records: Ipeople[]): Ipeople[] {
    const localRecords = this.getLocalRecords();
    const localById = new Map(localRecords.map((record) => [record.id, record]));
    const seedIds = new Set(records.map((record) => record.id));
    return [
      ...records.map((record) => localById.get(record.id) ?? record),
      ...localRecords.filter((record) => !seedIds.has(record.id)),
    ];
  }

  private getLocalRecords(): Ipeople[] {
    try {
      const storedRecords = localStorage.getItem(this.storageKey);
      return storedRecords ? (JSON.parse(storedRecords) as Ipeople[]) : [];
    } catch {
      return [];
    }
  }
}
