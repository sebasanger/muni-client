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
  private file: File;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ImportacionComponent>,
    private importacionService: ImportacionService
  ) {}

  save() {
    this.importacionService.importarLiquidaciones(this.file).subscribe(
      (err) => {
        Swal.fire('Error en la importacion', err, 'error');
      },
      (success) => {
        Swal.fire(
          'Importacion exitosa',
          'La importacion de las liquidaciones se realizo con exito',
          'success'
        );
        this.dialogRef.close();
      }
    );
  }

  csvInputChange(fileInputEvent: any) {
    this.file = fileInputEvent.target.files[0];
  }
}
