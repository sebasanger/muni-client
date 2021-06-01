import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { TipoConcepto } from 'src/app/models/tipoConcepto';

@Injectable({
  providedIn: 'root',
})
export class TipoConceptoService extends EntityCollectionServiceBase<TipoConcepto> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('TipoConcepto', serviceElementsFactory);
  }
}
