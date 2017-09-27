import { RouterModule, Routes } from '@angular/router';
import { NgModule, ModuleWithProviders } from "@angular/core";
import {
    HomeComponent,
    TestComponent,
    FormComponent,
    TablesComponent,
    MapsComponent,
    DemoComponent
} from './pages/index';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'test', component: TestComponent },
    { path: 'form', component: FormComponent },
    { path: 'table', component: TablesComponent },
    { path: 'map', component: MapsComponent },
    { path: 'demo', component: DemoComponent },
    { path: '**', component: HomeComponent }
    //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
