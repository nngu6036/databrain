import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Person, PersonService } from '../../services/person.service';
import { PersonFormContainer } from '../person-form/person-form.container';

@Component({
  selector: 'databrain-person-list-container',
  template: `<databrain-person-list
    [persons]="persons$ | async"
    (remove)="removePerson($event)"
    (add)="addPerson()"
    (edit)="editPerson($event)"
  ></databrain-person-list>`,
})
export class PersonListContainer implements OnInit {
  persons$: Observable<Person[]>;

  constructor(private personService: PersonService, public dialog: MatDialog) {}

  ngOnInit() {
    this.persons$ = this.personService.getPersons$();
  }

  removePerson(id: string) {
    this.personService.remove(id);
  }

  addPerson() {
    this.dialog.open(PersonFormContainer, {
      width: '60%',
      data: {},
    });
  }

  editPerson(id: string) {
    const person = this.personService.getPersonById(id);
    this.dialog.open(PersonFormContainer, {
      width: '60%',
      data: { person },
    });
  }
}
