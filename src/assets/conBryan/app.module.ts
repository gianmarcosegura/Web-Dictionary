import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Thin2AuthModule } from 'thin2-auth';
import { Thin2ComponentsProvidersModule } from 'thin2-components';
import { Thin2Config } from 'thin2-config';
import { Thin2LoggerModule } from 'thin2-log';
import { Thin2WebworkerModule } from 'thin2-webworker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { baseUriFactory } from './utils/baseUri/baseuri.factory';
import { baseUriInjectionToken } from './utils/baseUri/baseuri.injection.token';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NoopAnimationsModule,
        Thin2AuthModule.forRoot(),
        Thin2ComponentsProvidersModule,
        Thin2Config.forRoot(),
        Thin2LoggerModule.forRoot(),
        Thin2WebworkerModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        {
            provide: baseUriInjectionToken,
            useFactory: baseUriFactory
        }
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {
}
