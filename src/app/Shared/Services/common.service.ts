import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipeople } from '../Interfaces/ipeople';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getAllPeople(): Observable<Ipeople[]> {
    //Get all the data which is related to people.
    return this.http.get<Ipeople[]>('./assets/db/people.json');
  }

  searchPeople(name: string):string {
    return name;
    // return this.getAllPeople().subscribe({
    //   next: (v) => {
    //     return v;
    //   },
    //   error: (e) => {
    //     return e;
    //   },
    //   complete: (c:any) => {
    //     return c;
    //   },
    // });
  }
}
