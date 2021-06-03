import { createAction, props } from '@ngrx/store';
import { GetPaginatedLiquidaciones } from 'src/app/interfaces/liquidaciones/get-paginated-liquidaciones';

export const setPaginatedLiquidaciones = createAction(
  '[LIQUIDACION]  Set liquidaciones paginated success...',
  props<{ paginatedLiquidaciones: GetPaginatedLiquidaciones }>()
);
