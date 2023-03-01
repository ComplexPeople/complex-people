import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationWebComponent } from './navigation-web/navigation-web.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import {HttpClientModule} from "@angular/common/http";
import { TenantRequestsComponent } from './tenant-requests/tenant-requests.component';
import { NavigationWebComponent } from './components/navigation-web/navigation-web.component';

import { HttpClientModule } from '@angular/common/http';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { ResidentsComponent } from './components/residents/residents.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { ResidentDetailsComponent } from './components/resident-details/resident-details.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavigationWebComponent,
    DashboardComponent,
    MaintenanceComponent,
    TenantRequestsComponent
    NavigationWebComponent,
    ApartmentsComponent,
    ResidentsComponent,
    ApartmentDetailsComponent,
    ResidentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
