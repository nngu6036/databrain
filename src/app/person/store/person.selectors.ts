import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { get } from 'lodash';
import { AppState } from '../../store/app.state';
import { Person } from '../services/person.service';
import { adapter, PersonState } from './person.state';

export const featureName = 'person';

export const selectFeature = createFeatureSelector<AppState, PersonState>(
  featureName
);

export const {
  selectIds: selectPersonIds,
  selectEntities: selectPersonEntities,
  selectAll: selectAllPersons,
  selectTotal: selectPersonTotal,
} = adapter.getSelectors(selectFeature);

export const selectPersonById = createSelector(
  selectPersonEntities,
  (persons: Dictionary<Person>, { id }) => get(persons, id)
);
