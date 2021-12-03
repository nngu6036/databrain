import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'databrain-person-page',
  template:
    '<databrain-person-list-container></databrain-person-list-container>',
})
export class PersonPageComponent implements OnInit {
  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.list();
  }
}
