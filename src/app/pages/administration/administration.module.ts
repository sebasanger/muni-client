import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdministrationRouting } from './administration.routing';
import { TipoLiquidacionesComponent } from './tipo-liquidaciones/tipo-liquidaciones.component';
import { CreateUpdateTipoLiquidacionComponent } from './tipo-liquidaciones/create-update-tipo-liquidacion/create-update-tipo-liquidacion.component';
import { AreasComponent } from './areas/areas.component';
import { CreateUpdateAreasComponent } from './areas/create-update-areas/create-update-areas.component';
@NgModule({
  declarations: [
    AdministrationComponent,
    TipoLiquidacionesComponent,
    CreateUpdateTipoLiquidacionComponent,
    AreasComponent,
    CreateUpdateAreasComponent,
  ],
  imports: [
    AdministrationRouting,
    CommonModule,
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
  ],
})
export class AdministrationModule {}
