import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SuperDashboardComponent } from './components/super-dashboard/super-dashboard.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signin", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "dashboard", component: DashboardComponent },
  {
    path: "super-dash", component: SuperDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
