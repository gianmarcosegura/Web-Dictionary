import { Component } from '@angular/core';

import { Thin2Logger } from 'thin2-log';

import { AboutService } from './about.service';

@Component({
    selector: 'about-component',
    templateUrl: 'about.component.html'
})
export class AboutComponent {

    public param = '';

    constructor(private log: Thin2Logger,
                private aboutService: AboutService) {
    }

    public callAboutRest(param: string) {
        this.aboutService.callAboutRest(param).subscribe(
            (response: string) => {
                this.log.info('The call to the api was successful');
            }, (error) => {
                this.log.error('An error occurred when calling the api');
            }
        );
    }
}
