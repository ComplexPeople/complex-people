import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/register.component";
import {AccountDetailsComponent} from "./account-details/account-details.component";
import {AuthGuard} from "./_helpers";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ApartmentsComponent} from "./components/apartments/apartments.component";
import {MaintenanceComponent} from "./components/maintenance/maintenance.component";
import {ResidentsComponent} from "./components/residents/residents.component";
import {ResidentDetailsComponent} from "./components/resident-details/resident-details.component";
import {ApartmentDetailsComponent} from "./components/apartment-details/apartment-details.component";
import {VisitorsComponent} from "./components/visitors/visitors.component";
import {VisitorsDetailsComponent} from "./components/visitors-details/visitors-details.component";
import {AddApartmentComponent} from "./components/add-apartment/add-apartment.component";
import {AddResidentComponent} from "./components/add-resident/add-resident.component";
import {AddMaintenanceComponent} from "./components/add-maintenance/add-maintenance.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {NavigationWebComponent} from "./components/navigation-web/navigation-web.component";
import {AddVisitorComponent} from "./components/add-visitor/add-visitor.component";

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: 'full'},
  {path: "home", component: NavigationWebComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: "dashboard", component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: "maintenance", component: MaintenanceComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'apartments', component: ApartmentsComponent, canActivate: [AuthGuard]},
  {path: 'residents', component: ResidentsComponent, canActivate: [AuthGuard]},
  {path: 'residents/:id', component: ResidentDetailsComponent, canActivate: [AuthGuard]},
  {path: 'apartments/:id', component: ApartmentDetailsComponent, canActivate: [AuthGuard]},
  {path: "register", component: RegisterComponent},
  {path: "account/details", component: AccountDetailsComponent, canActivate: [AuthGuard]},
  {path: 'visitors', component: VisitorsComponent, canActivate: [AuthGuard]},
  {path: 'visitors/:id', component: VisitorsDetailsComponent, canActivate: [AuthGuard]},
  {path: 'new-apartment', component: AddApartmentComponent, canActivate: [AuthGuard]},
  {path: 'new-resident', component: AddResidentComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent},
  {path: "new", component: AddMaintenanceComponent, canActivate: [AuthGuard]},
  {path: "new-visitor", component: AddVisitorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
