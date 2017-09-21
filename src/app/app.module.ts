import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { PetService } from './services/index';
import {
    HomeComponent,
    TestComponent
} from './pages/index';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    providers: [
        PetService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
