import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routes

import { APP_ROUTING } from './app.routes';

// Pipes

import { ToLower } from './pipes/lowerCase.pipe';
import { ToUpper } from './pipes/upperCase.pipe';


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
    DictionaryComponent,
    // Pipes
    ToLower,
    ToUpper
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    ElementsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
