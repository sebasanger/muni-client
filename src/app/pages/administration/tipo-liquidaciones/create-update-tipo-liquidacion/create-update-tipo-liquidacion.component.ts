import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TipoLiquidacion } from 'src/app/models/tipoLiquidacion';
import { TipoLiquidacionService } from 'src/app/services/EntityServices/tipo-liquidacion.service';

export interface DialogData {
  id?: number;
  tipoLiquidacion?: string;
  title: string;
}

@Component({
  selector: 'app-create-update-tipo-liquidacion',
  templateUrl: './create-update-tipo-liquidacion.component.html',
  styleUrls: ['./create-update-tipo-liquidacion.component.scss'],
})
export class CreateUpdateTipoLiquidacionComponent {
  tipoLiquidacionForm = this.fb.group({
    tipoLiquidacion: [this.data.tipoLiquidacion, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private tipoLiquidacionService: TipoLiquidacionService,
    public dialogRef: MatDialogRef<CreateUpdateTipoLiquidacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onSubmit() {
    if (this.tipoLiquidacionForm.invalid) {
      return;
    }
    const tipoLiquidacionValue: string =
      this.tipoLiquidacionForm.controls['tipoLiquidacion'].value;

    if (this.data.id != null) {
      const newTipoLiquidacion = new TipoLiquidacion(
        this.data.id,
        tipoLiquidacionValue
      );
      this.update(newTipoLiquidacion);
    } else {
      const newTipoLiquidacion = new TipoLiquidacion(
        null,
        tipoLiquidacionValue
      );
      this.add(newTipoLiquidacion);
    }
    this.dialogRef.close();
  }

  add(tipoLiquidacion: TipoLiquidacion) {
    this.tipoLiquidacionService.add(tipoLiquidacion);
  }
  update(tipoLiquidacion: TipoLiquidacion) {
    this.tipoLiquidacionService.update(tipoLiquidacion);
  }
}
