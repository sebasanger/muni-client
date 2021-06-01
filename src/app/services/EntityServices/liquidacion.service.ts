import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Liquidacion } from 'src/app/models/liquidacion';

@Injectable({
  providedIn: 'root',
})
export class LiquidacionService extends EntityCollectionServiceBase<Liquidacion> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Liquidacion', serviceElementsFactory);
  }
}
