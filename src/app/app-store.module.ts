import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appEffects } from './store/app.effects';
import { appReducers } from './store/app.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
  ],
})
export class AppStoreModule {}
