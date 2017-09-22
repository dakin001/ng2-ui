import { RouterModule, Routes } from '@angular/router';
import { NgModule, ModuleWithProviders } from "@angular/core";
import {
    HomeComponent,
    TestComponent,
    FormComponent
} from './pages/index';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'test', component: TestComponent },
    { path: 'form', component: FormComponent },
    { path: '**', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
