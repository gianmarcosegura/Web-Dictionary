import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// AJAX

import { HttpClientModule } from '@angular/common/http';

// Routes

import { APP_ROUTING } from './app.routes';

// Pipes


// Servicios

import { ElementsService } from './services/elements.services';


// Componentes

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DictionaryComponent

    // Pipes
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ElementsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
