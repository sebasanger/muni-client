import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Area } from 'src/app/models/area';
import { AreaService } from 'src/app/services/EntityServices/area.service';

export interface DialogData {
  id?: number;
  area?: string;
  codigo?: string;
  title: string;
}

@Component({
  selector: 'app-create-update-areas',
  templateUrl: './create-update-areas.component.html',
  styleUrls: ['./create-update-areas.component.scss'],
})
export class CreateUpdateAreasComponent {
  areaForm = this.fb.group({
    area: [this.data.area, Validators.required],
    codigo: [this.data.codigo, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private areaService: AreaService,
    public dialogRef: MatDialogRef<CreateUpdateAreasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onSubmit() {
    if (this.areaForm.invalid) {
      return;
    }
    const areaValue: string = this.areaForm.controls['area'].value;

    const codigoValue: string = this.areaForm.controls['codigo'].value;

    if (this.data.id != null) {
      const newArea = new Area(this.data.id, areaValue, codigoValue);
      this.update(newArea);
    } else {
      const newArea = new Area(null, areaValue, codigoValue);
      this.add(newArea);
    }
    this.dialogRef.close();
  }

  add(area: Area) {
    this.areaService.add(area);
  }
  update(area: Area) {
    this.areaService.update(area);
  }
}
