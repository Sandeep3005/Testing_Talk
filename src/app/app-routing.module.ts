import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingmodule {
}
