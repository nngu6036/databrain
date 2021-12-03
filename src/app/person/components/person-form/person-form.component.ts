import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'databrain-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent {
  @Input() readonly form: FormGroup;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  cancelForm() {
    this.cancel.emit();
  }

  saveForm() {
    this.save.emit();
  }

  get firstName() {
    return this.form.get('FirstName');
  }

  get lastName() {
    return this.form.get('LastName');
  }

  get dateOfBirth() {
    return this.form.get('DateOfBirth');
  }

  get telephone() {
    return this.form.get('Telephone');
  }

  get email() {
    return this.form.get('Email');
  }
}
