import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TipoLiquidacionesComponent } from './tipo-liquidaciones/tipo-liquidaciones.component';
import { AreasComponent } from './areas/areas.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '**', redirectTo: 'reasons' }],
  },
  {
    path: 'tiposliquidaciones',
    component: TipoLiquidacionesComponent,
    pathMatch: 'full',
  },
  {
    path: 'areas',
    component: AreasComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AdministrationRouting {}
