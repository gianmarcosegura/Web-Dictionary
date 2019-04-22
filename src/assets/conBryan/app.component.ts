import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Th2MatLoadingService } from 'thin2-components';
import { ConfigStore } from 'thin2-config';
import { Thin2Logger } from 'thin2-log';

import { HEADER } from './utils/configuration/app/headerConfiguration';
import { FOOTER } from './utils/configuration/app/footerConfiguration';

@Component({
    selector: 'thin2-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public headerConf;
    public footerConf;

    constructor(private log: Thin2Logger,
                private router: Router,
                private loadingService: Th2MatLoadingService) {
    }

    public ngOnInit() {

        // Header and footer data
        this.headerConf = HEADER;
        this.footerConf = FOOTER;

        // With this, the application's upload service is controlled through the router events
        this.router.events.pipe(
            filter((event) => {
                return event instanceof RouteConfigLoadStart || event instanceof RouteConfigLoadEnd;
            })
        ).subscribe(
            (event) => {
                if (event instanceof RouteConfigLoadStart) {
                    this.loadingService.display(true);
                } else {
                    this.loadingService.display(false);
                }
            },
        );

        // write an example error message
        this.log.error('Welcome to the Thin2 application template.');
    }
}
