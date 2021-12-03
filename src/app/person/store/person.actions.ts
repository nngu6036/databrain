import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Person } from '../services/person.service';

export enum PersonActionTypes {
  LIST_REQUEST = '[Person] List Request',
  LIST_SUCCESS = '[Person] List Success',
  LIST_FAILURE = '[Person] List Failure',

  CREATE_REQUEST = '[Person] Create Request',
  CREATE_SUCCESS = '[Person] Create Success',
  CREATE_FAILURE = '[Person] Create Failure',

  UPDATE_REQUEST = '[Person] Update Request',
  UPDATE_SUCCESS = '[Person] Update Success',
  UPDATE_FAILURE = '[Person] Update Failure',

  REMOVE_REQUEST = '[Person] Remove Request',
  REMOVE_SUCCESS = '[Person] Remove Success',
  REMOVE_FAILURE = '[Person] Remove Failure',
}

export const personListSuccess = createAction(
  PersonActionTypes.LIST_SUCCESS,
  props<{ persons: Person[] }>()
);
export const personListFailure = createAction(
  PersonActionTypes.LIST_FAILURE,
  props<{ error: any }>()
);

export const personListRequest = createAction(PersonActionTypes.LIST_REQUEST);

export const personCreateSuccess = createAction(
  PersonActionTypes.CREATE_SUCCESS,
  props<{ person: Person }>()
);
export const personCreateFailure = createAction(
  PersonActionTypes.CREATE_FAILURE,
  props<{ error: any }>()
);

export const personCreateRequest = createAction(
  PersonActionTypes.CREATE_REQUEST,
  props<{ person }>()
);

export const personUpdateSuccess = createAction(
  PersonActionTypes.UPDATE_SUCCESS,
  props<{ update: Update<Person> }>()
);
export const personUpdateFailure = createAction(
  PersonActionTypes.UPDATE_FAILURE,
  props<{ error: any }>()
);

export const personUpdateRequest = createAction(
  PersonActionTypes.UPDATE_REQUEST,
  props<{ person: Person }>()
);

export const personRemoveSuccess = createAction(
  PersonActionTypes.REMOVE_SUCCESS,
  props<{ id: string }>()
);
export const personRemoveFailure = createAction(
  PersonActionTypes.REMOVE_FAILURE,
  props<{ error: any }>()
);

export const personRemoveRequest = createAction(
  PersonActionTypes.REMOVE_REQUEST,
  props<{ id: string }>()
);
