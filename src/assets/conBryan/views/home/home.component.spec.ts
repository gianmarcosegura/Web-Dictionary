import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Home', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
            ]
        });
    });

    it('is defined', () => {
        expect(HomeComponent).toBeDefined();
    });
});
