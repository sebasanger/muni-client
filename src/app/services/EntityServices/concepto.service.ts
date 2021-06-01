import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Concepto } from 'src/app/models/concepto';

@Injectable({
  providedIn: 'root',
})
export class ConceptoService extends EntityCollectionServiceBase<Concepto> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Concepto', serviceElementsFactory);
  }
}
