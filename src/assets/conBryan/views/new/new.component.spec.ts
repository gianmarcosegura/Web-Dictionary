import { TestBed } from '@angular/core/testing';

import { NewComponent } from '../new/new.component';

describe('New', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                NewComponent,
            ]
        });
    });

    it('is defined', () => {
        expect(NewComponent).toBeDefined();
    });
});
