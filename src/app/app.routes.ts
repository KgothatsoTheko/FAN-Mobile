import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ManageBookingComponent } from './dashboard/manage-booking/manage-booking.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { StylistsComponent } from './dashboard/stylists/stylists.component';

export const routes: Routes = [
    {path: '', redirectTo: 'landing', pathMatch: 'full'},
    {path: 'landing', component: LandingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'customer', component: CustomerComponent, children: [
        {path: 'home', component: HomeComponent},
        {path: 'service', component: ServiceComponent},
        {path: 'appointments', component: AppointmentsComponent},
    ]},
    {path: 'admin', component: AdminComponent, children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'manage-booking', component: ManageBookingComponent},
        {path: 'reports', component: ReportsComponent},
        {path: 'stylists', component: StylistsComponent},
    ]},
];
