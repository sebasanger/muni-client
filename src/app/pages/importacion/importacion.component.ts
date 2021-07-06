import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ImportacionService } from 'src/app/services/importacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-importacion',
  templateUrl: './importacion.component.html',
  styleUrls: ['./importacion.component.scss'],
})
export class ImportacionComponent {
  private conceptos: File;
  private maestro: File;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ImportacionComponent>,
    private importacionService: ImportacionService
  ) {}

  save() {
    this.importacionService
      .importarLiquidaciones(this.conceptos, this.maestro)
      .subscribe(
        () => {
          Swal.fire(
            'Importacion exitosa',
            'La importacion de las liquidaciones se realizo con exito',
            'success'
          );

          this.dialogRef.close();
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        },
        (err) => {
          console.log(err);

          Swal.fire('Error en la importacion', err, 'error');
        }
      );
  }

  selectConceptos(fileInputEvent: any) {
    this.conceptos = fileInputEvent.target.files[0];
  }

  selectMaestro(fileInputEvent: any) {
    this.maestro = fileInputEvent.target.files[0];
  }
}
