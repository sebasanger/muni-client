import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authRoot } from './auth/indexAuth';
import { userRoot } from './user/indexUser';
import { liquidacionRoot } from './liquidacion/indexLiquidacion';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { NgrxDataToastService } from './ngrx-data-toast.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [],
  imports: [
    MatSnackBarModule,
    StoreModule.forRoot({
      auth: authRoot.authReducer,
      user: userRoot.userReducer,
      liquidacion: liquidacionRoot.liquidacionReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      authRoot.AuthEffects,
      userRoot.UserEffects,
      liquidacionRoot.LiquidacionEffects,
    ]),
    CommonModule,
  ],
  exports: [StoreModule],
})
export class AppStoreModule {
  constructor(toastService: NgrxDataToastService) {}
}
