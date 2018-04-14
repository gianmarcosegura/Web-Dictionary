import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes

import { FeatureRoutingModule, APP_ROUTING } from './app.routes';


// Componentes

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
