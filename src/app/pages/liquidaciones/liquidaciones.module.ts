import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidacionesComponent } from './liquidaciones.component';
import { ViewLiquidacionesComponent } from './view-liquidaciones/view-liquidaciones.component';
import { CreateUpdateLiquidacionComponent } from './create-update-liquidacion/create-update-liquidacion.component';
import { LiquidacionDetailsComponent } from './liquidacion-details/liquidacion-details.component';
import { LiquidacionRouting } from './liquidacion.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    LiquidacionesComponent,
    ViewLiquidacionesComponent,
    CreateUpdateLiquidacionComponent,
    LiquidacionDetailsComponent,
  ],
  imports: [
    CommonModule,
    LiquidacionRouting,
    SharedModule,
    ComponentsModule,
    MatGridListModule,
    MatCardModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class LiquidacionesModule {}
