import { RouterModule, Routes } from '@angular/router';
import { NgModule, ModuleWithProviders } from "@angular/core";
import {
    HomeComponent,
    TestComponent
} from './pages/index';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'test', component: TestComponent },
    { path: '**', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
