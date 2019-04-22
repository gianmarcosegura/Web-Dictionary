import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Thin2ComponentsModule } from 'thin2-components';

import { AboutComponent } from './about.component';
import { AboutViewRoutingModule } from './about.routing';
import { AboutService } from './about.service';

@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AboutViewRoutingModule,
        Thin2ComponentsModule
    ],
    providers: [
        AboutService
    ]
})

export class AboutViewModule {
}
