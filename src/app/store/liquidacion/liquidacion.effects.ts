import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as liquidacionApiActions from './liquidacion.api.actions';
import * as liquidacionActions from './liquidacion.actions';
import { LiquidacionService } from 'src/app/services/EntityServices/liquidacion.service';

@Injectable({
  providedIn: 'root',
})
export class LiquidacionEffects {
  constructor(
    private actions$: Actions,
    private liquidacionService: LiquidacionService
  ) {}

  getPaginatedLiquidaciones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(liquidacionApiActions.getLiquidacionesPaginated),
      mergeMap((action) => {
        return this.liquidacionService
          .paginatedLiquidaciones(
            action.filter,
            action.sortDirection,
            action.sort,
            action.pageIndex,
            action.pageSize
          )
          .pipe(
            map((res: any) => {
              return liquidacionActions.setPaginatedLiquidaciones({
                paginatedLiquidaciones: res,
              });
            }),
            catchError((error: any) => {
              throw error;
            })
          );
      })
    );
  });
}
