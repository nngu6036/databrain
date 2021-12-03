import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Person } from '../services/person.service';

export interface PersonState extends EntityState<Person> {}
export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>({
  selectId: (model) => model.Id,
});

export const initialState: PersonState = adapter.getInitialState();
