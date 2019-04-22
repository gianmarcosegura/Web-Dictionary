import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeViewRoutingModule } from './home.routing';
import { NewComponent } from '../new/new.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        HomeComponent,
        NewComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        HomeViewRoutingModule,
        HttpClientModule
    ],
    providers:[]
})

export class HomeViewModule {
}
