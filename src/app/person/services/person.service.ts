import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import moment from 'moment';
import { Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import PersonJson from '../../../assets/persons.json';
import { AppState } from '../../store/app.state';
import {
  personCreateRequest,
  personListRequest,
  personRemoveRequest,
  personUpdateRequest,
} from '../store/person.actions';
import { selectAllPersons, selectPersonById } from '../store/person.selectors';

export interface Person {
  Id: string;
  FirstName: string;
  LastName: string;
  DateOfBirth: Date;
  Telephone: string;
  Email: string;
}

@Injectable()
export class PersonService {
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  list(): void {
    this.store.dispatch(personListRequest());
  }

  list$(): Observable<Person[]> {
    const persons = PersonJson.map((person) => {
      return {
        ...person,
        DateOfBirth: moment(person.DateOfBirth, 'DD/MM/YYYY').toDate(),
      };
    });
    return of(persons);
  }

  create(formValue: any): void {
    const person = {
      ...formValue,
      Id: new Date().getTime(),
    };
    this.store.dispatch(personCreateRequest({ person }));
  }

  create$(person: Person): Observable<Person> {
    return of(person);
  }

  remove(id: string): void {
    this.store.dispatch(personRemoveRequest({ id }));
  }

  remove$(id: string): Observable<string> {
    return of(id);
  }

  update(formValue: any): void {
    this.store.dispatch(personUpdateRequest({ person: { ...formValue } }));
  }

  update$(person: Person): Observable<Person> {
    return of(person);
  }

  getPersons$(): Observable<Person[]> {
    return this.store.pipe(select(selectAllPersons));
  }

  getPersonForm(): FormGroup {
    return this.fb.group({
      Id: [''],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Telephone: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      DateOfBirth: ['', [Validators.required]],
    });
  }

  getPersonById$(id: string | number): Observable<Person> {
    return this.store.pipe(select(selectPersonById, { id }));
  }

  getPersonById(id: string | number): Person {
    return this.getCurrentState(this.getPersonById$(id));
  }

  getCurrentState<T>(stream: Observable<T>): T {
    let item;
    stream
      .pipe(
        take(1),
        tap((_item) => (item = _item))
      )
      .subscribe();
    return item;
  }
}
