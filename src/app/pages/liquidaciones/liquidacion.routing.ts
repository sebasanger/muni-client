import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewLiquidacionesComponent } from './view-liquidaciones/view-liquidaciones.component';
import { CreateUpdateLiquidacionComponent } from './create-update-liquidacion/create-update-liquidacion.component';
import { LiquidacionDetailsComponent } from './liquidacion-details/liquidacion-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ViewLiquidacionesComponent,
        pathMatch: 'full',
      },
      {
        path: 'create',
        component: CreateUpdateLiquidacionComponent,
      },
      {
        path: 'update/:id',
        component: CreateUpdateLiquidacionComponent,
      },
      {
        path: 'details/:id',
        component: LiquidacionDetailsComponent,
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LiquidacionRouting {}
