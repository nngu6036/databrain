import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonFormContainer } from './containers/person-form/person-form.container';
import { PersonListContainer } from './containers/person-list/person-list.container';
import { PersonPageComponent } from './pages/person/person.page';
import { PersonRoutingModule } from './person-routing.module';
import { PersonStoreModule } from './person-store.module';
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    PersonFormComponent,
    PersonListComponent,
    PersonFormContainer,
    PersonListContainer,
    PersonPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    PersonStoreModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    PersonRoutingModule,
  ],
  providers: [PersonService],
})
export class PersonModule {}
