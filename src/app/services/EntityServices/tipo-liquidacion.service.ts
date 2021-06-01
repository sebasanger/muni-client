import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { TipoLiquidacion } from 'src/app/models/tipoLiquidacion';

@Injectable({
  providedIn: 'root',
})
export class TipoLiquidacionService extends EntityCollectionServiceBase<TipoLiquidacion> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('TipoLiquidacion', serviceElementsFactory);
  }
}
