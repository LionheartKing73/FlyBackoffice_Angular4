import { NgModule } from '@angular/core';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { LoginComponent } from './login/login.component';
import { AirlinesComponent } from './Airlines/Airlines.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashboardComponent,
    children: []
  },
  {
    path: 'login',
    component: LoginComponent,
    children: []
  },
  {
    path: 'Airlines',
    component: AirlinesComponent,
    children: []
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
