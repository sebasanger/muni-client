import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLiquidacion from './liquidacion.reducer';

export const liquidacionStateSelector =
  createFeatureSelector<fromLiquidacion.State>(
    fromLiquidacion.liquidacionFeatureKey
  );

export const selectPaginatedLiquidaciones = createSelector(
  liquidacionStateSelector,
  (state: fromLiquidacion.State) => state.paginatedLiquidaciones
);
