import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PersonService } from './services/person.service';
import { personEffects } from './store/person.effects';
import { personReducer } from './store/person.reducer';
import { featureName } from './store/person.selectors';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, personReducer),
    EffectsModule.forFeature(personEffects),
  ],
  providers: [PersonService],
})
export class PersonStoreModule {}
