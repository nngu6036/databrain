import { EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Person } from '../services/person.service';
import * as actions from './person.actions';
import { adapter, initialState } from './person.state';

const reducer = createReducer(
  initialState,
  on(actions.personListSuccess, (state, { persons }) =>
    adapter.addMany(persons, state)
  ),
  on(actions.personCreateSuccess, (state, { person }) =>
    adapter.addOne(person, state)
  ),
  on(actions.personUpdateSuccess, (state, { update }) =>
    adapter.updateOne(update, state)
  ),
  on(actions.personRemoveSuccess, (state, { id }) => {
    return adapter.removeOne(id, state);
  })
);

export function personReducer(
  state: EntityState<Person> | undefined,
  action: Action
) {
  return reducer(state, action);
}
