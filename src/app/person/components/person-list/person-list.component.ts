import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../services/person.service';

@Component({
  selector: 'databrain-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent {
  @Input() readonly persons: Person[];

  @Output() add = new EventEmitter<void>();
  @Output() edit = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();

  addPerson() {
    this.add.emit();
  }

  editPerson(id: string) {
    this.edit.emit(id);
  }

  removePerson(id: string) {
    this.remove.emit(id);
  }
}
