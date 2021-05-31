import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '**', redirectTo: 'reasons' }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AdministrationRouting {}
