import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person, PersonService } from '../../services/person.service';

@Component({
  selector: 'databrain-person-form-container',
  template: `<databrain-person-form
    [form]="form"
    (cancel)="closeDialog()"
    (save)="saveDialog()"
  >
  </databrain-person-form>`,
})
export class PersonFormContainer {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { person: Person },
    private personService: PersonService,
    private dialogRef: MatDialogRef<PersonFormContainer>
  ) {
    this.form = this.personService.getPersonForm();
    if (this.data.person) this.form.patchValue(this.data.person);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveDialog() {
    this.dialogRef.close();
    if (this.form.controls['Id'].value)
      this.personService.update(this.form.value);
    else this.personService.create(this.form.value);
  }
}
