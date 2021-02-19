import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home2', component: Home2Component},
  { path: 'report', loadChildren: () => import('./report/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
