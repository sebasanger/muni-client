import { createAction, props } from '@ngrx/store';

export const getLiquidacionesPaginated = createAction(
  '[LIQUIDACION API]  Api get liquidacion paginated...',
  props<{
    filter: string;
    sortDirection: string;
    sort: string;
    pageIndex: number;
    pageSize: number;
  }>()
);
