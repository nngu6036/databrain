import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PersonService } from '../services/person.service';
import {
  PersonActionTypes,
  personCreateFailure,
  personCreateSuccess,
  personListFailure,
  personListSuccess,
  personRemoveFailure,
  personRemoveSuccess,
  personUpdateFailure,
  personUpdateSuccess,
} from './person.actions';

@Injectable()
export class PersonStoreEffects {
  constructor(
    private actions$: Actions,
    private personService: PersonService
  ) {}

  listRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActionTypes.LIST_REQUEST),
      switchMap(() =>
        this.personService.list$().pipe(
          switchMap((persons) => {
            return [personListSuccess({ persons })];
          }),
          catchError((error) => of(personListFailure({ error })))
        )
      )
    )
  );

  createRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActionTypes.CREATE_REQUEST),
      switchMap(({ person }) =>
        this.personService.create$(person).pipe(
          map((person) => {
            return personCreateSuccess({ person });
          }),
          catchError((error) => {
            return of(personCreateFailure({ error }));
          })
        )
      )
    )
  );

  updateRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActionTypes.UPDATE_REQUEST),
      switchMap(({ person }) =>
        this.personService.update$(person).pipe(
          map((person) => {
            let update = {
              id: person.Id,
              changes: { ...person },
            };
            return personUpdateSuccess({ update });
          }),
          catchError((error) => {
            return of(personUpdateFailure({ error }));
          })
        )
      )
    )
  );

  removeRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonActionTypes.REMOVE_REQUEST),
      switchMap(({ id }) =>
        this.personService.remove$(id).pipe(
          map((id) => {
            return personRemoveSuccess({ id });
          }),
          catchError((error) => {
            return of(personRemoveFailure({ error }));
          })
        )
      )
    )
  );
}

export const personEffects = [PersonStoreEffects];
