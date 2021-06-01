import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { LiquidacionConcepto } from 'src/app/models/liquidacionConcepto';

@Injectable({
  providedIn: 'root',
})
export class LiquidacionConceptoService extends EntityCollectionServiceBase<LiquidacionConcepto> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('LiquidacionConcepto', serviceElementsFactory);
  }
}
