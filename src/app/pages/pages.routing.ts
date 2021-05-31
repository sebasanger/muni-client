import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UpdateAcountComponent } from './update-acount/update-acount.component';
import { ChartsComponent } from './charts/charts.component';
import { AdministrationComponent } from './administration/administration.component';
import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'charts',
        component: ChartsComponent,
      },
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full',
      },
      {
        path: 'users',
        canActivate: [AdminGuard],
        component: UsersComponent,
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },

      {
        path: 'administration',
        canActivate: [AdminGuard],
        component: AdministrationComponent,
        loadChildren: () =>
          import('./administration/administration.module').then(
            (m) => m.AdministrationModule
          ),
      },
      {
        path: 'update-acount',
        component: UpdateAcountComponent,
      },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PagesRoutingModule {}
