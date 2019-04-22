import { TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('About', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AboutComponent,
            ]
        });
    });

    it('is defined', () => {
        expect(AboutComponent).toBeDefined();
    });
});
