import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ofEntityOp, EntityOp } from '@ngrx/data';
import Swal from 'sweetalert2';

/** Report ngrx-data success/error actions as toast messages **/
@Injectable({ providedIn: 'root' })
export class NgrxDataToastService {
  constructor(actions$: Actions<any>) {
    //On save SUCCESS one entity
    actions$
      .pipe(ofEntityOp(EntityOp.SAVE_ADD_ONE_SUCCESS))
      .subscribe((action) => {
        Swal.fire(
          'Se guardo exitosamente',
          action.payload.entityName + ' guardado',
          'success'
        );
      });

    //On save ERROR one entity
    actions$
      .pipe(ofEntityOp(EntityOp.SAVE_ADD_ONE_ERROR))
      .subscribe((action) => {
        Swal.fire(
          'Error al guardar',
          action.payload.data.error.message,
          'error'
        );
      });

    //On update SUCCESS one entity
    actions$
      .pipe(ofEntityOp(EntityOp.SAVE_UPDATE_ONE_SUCCESS))
      .subscribe((action) => {
        Swal.fire(
          'Se actualizo exitosamente',
          action.payload.entityName + ' actualizado',
          'success'
        );
      });

    //On update ERROR one entity
    actions$
      .pipe(ofEntityOp(EntityOp.SAVE_UPDATE_ONE_ERROR))
      .subscribe((action) => {
        Swal.fire(
          'Error al actuializar',
          action.payload.data.error.message,
          'error'
        );
      });

    //On get all ERROR entity
    actions$.pipe(ofEntityOp(EntityOp.QUERY_ALL_ERROR)).subscribe((action) => {
      Swal.fire(
        'Error al obtener informacion',
        action.payload.entityName,
        'error'
      );
    });

    //On delete SUCCESS entity
    actions$
      .pipe(ofEntityOp(EntityOp.SAVE_DELETE_ONE_SUCCESS))
      .subscribe((action) => {
        Swal.fire(
          'Exito al eliminar',
          action.payload.entityName + ' eliminado',
          'success'
        );
      });

    //On delete ERROR entity
    actions$
      .pipe(ofEntityOp(EntityOp.SAVE_DELETE_ONE_ERROR))
      .subscribe((action) => {
        Swal.fire(
          action.payload.entityName + ' no se elimino',
          action.payload.data.error.message,
          'error'
        );
      });
  }
}
