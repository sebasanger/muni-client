import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreateUpdateLiquidacionPayload } from 'src/app/interfaces/liquidaciones/CreateUpdateLiquidacion';
import { GetPaginatedLiquidaciones } from 'src/app/interfaces/liquidaciones/get-paginated-liquidaciones';
import { Liquidacion } from 'src/app/models/liquidacion';
import { selectPaginatedLiquidaciones } from 'src/app/store/liquidacion/customer.selectors';
import { getLiquidacionesPaginated } from 'src/app/store/liquidacion/liquidacion.api.actions';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class LiquidacionService extends EntityCollectionServiceBase<Liquidacion> {
  public paginatedLiquidaciones$: Observable<GetPaginatedLiquidaciones>;
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient,
    private liquidacionStore: Store<{ liquidacion: any }>
  ) {
    super('Liquidacion', serviceElementsFactory);

    this.paginatedLiquidaciones$ = this.liquidacionStore.pipe(
      select(selectPaginatedLiquidaciones)
    );
  }

  createLiquidacion(createLiquidacionPayload: CreateUpdateLiquidacionPayload) {
    return this.http.post<any>(
      `${base_url}liquidacion/save`,
      createLiquidacionPayload
    );
  }

  updateLiquidacion(updateLiquidacionPayload: CreateUpdateLiquidacionPayload) {
    return this.http.put<any>(
      `${base_url}liquidacion/update`,
      updateLiquidacionPayload
    );
  }

  paginatedLiquidaciones(
    filter: string,
    sortDirection: string,
    sort: string,
    pageIndex: number,
    pageSize: number
  ) {
    return this.http.get<GetPaginatedLiquidaciones>(
      `${base_url}liquidacion/paginated`,
      {
        params: new HttpParams()
          .set('page', pageIndex.toString())
          .set('filter', filter)
          .set('size', pageSize.toString())
          .set('sort', `${sort},${sortDirection}`),
      }
    );
  }

  getPaginatedLiquidaciones(
    filter: string,
    sortDirection: string,
    sort: string,
    pageIndex: number,
    pageSize: number
  ) {
    this.liquidacionStore.dispatch(
      getLiquidacionesPaginated({
        filter,
        pageIndex,
        pageSize,
        sortDirection,
        sort,
      })
    );
  }
}
