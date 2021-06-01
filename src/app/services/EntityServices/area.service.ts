import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Area } from 'src/app/models/area';

@Injectable({
  providedIn: 'root',
})
export class AreaService extends EntityCollectionServiceBase<Area> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Area', serviceElementsFactory);
  }
}
