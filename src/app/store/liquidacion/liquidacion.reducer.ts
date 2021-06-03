import { createReducer, on } from '@ngrx/store';
import * as LiquidacionActions from './liquidacion.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { HttpErrorResponse } from '@angular/common/http';
import { Liquidacion } from 'src/app/models/liquidacion';
import { GetPaginatedLiquidaciones } from 'src/app/interfaces/liquidaciones/get-paginated-liquidaciones';

export const liquidacionFeatureKey = 'liquidacion';

export const liquidacionAdapter: EntityAdapter<Liquidacion> =
  createEntityAdapter<Liquidacion>();

export interface State extends EntityState<Liquidacion> {
  paginatedLiquidaciones: GetPaginatedLiquidaciones;
  error: HttpErrorResponse;
  loading: boolean;
}
export const initialState: State = liquidacionAdapter.getInitialState({
  paginatedLiquidaciones: null,
  error: null,
  loading: false,
});

export const liquidacionReducer = createReducer(
  initialState,
  on(
    LiquidacionActions.setPaginatedLiquidaciones,
    (state, { paginatedLiquidaciones }) => ({
      ...state,
      paginatedLiquidaciones,
      error: null,
      loading: false,
    })
  )
);
