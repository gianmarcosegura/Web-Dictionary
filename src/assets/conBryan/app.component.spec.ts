import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { Thin2AuthModule } from 'thin2-auth';
import { Thin2ComponentsProvidersModule } from 'thin2-components';
import { Thin2Config } from 'thin2-config';
import { Thin2LoggerModule } from 'thin2-log';
import { Thin2WebworkerModule } from 'thin2-webworker';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    const MOCK_CONFIG = {
        nova: {
            thin2: {
                cfg: 'configuration',
                port: '15000',
                application: {
                    name: 'th2-ww',
                    company: 'BBVA',
                    date: '30/11/2016'
                },
                authService: {
                    urlAuth: 'mocks/authMock.json',
                    uuaa: 'UUAA',
                    timeout: 3000,
                    urlRegExp: '/\/secure\/*/',
                    urlAuthError: '/AuthErrorState',
                    urlInternalError: '/InternalErrorState'
                },
                loggers: [
                    {
                        name: 'DefaultLogger',
                        level: 'debug',
                        appenders: [
                            {
                                dateFormat: 'DD/MM/YYYY HH:mm:ss',
                                name: 'ConsoleAppender',
                                type: 'console'
                            }
                        ]
                    }
                ]
            }
        }
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientTestingModule,
                RouterTestingModule,
                Thin2AuthModule.forRoot(),
                Thin2ComponentsProvidersModule,
                Thin2Config.forRoot(),
                Thin2LoggerModule.forRoot(),
                Thin2WebworkerModule.forRoot()
            ],
            declarations: [AppComponent]
        });
    });

    it('should work', inject([HttpTestingController], (http: HttpTestingController) => {
        const fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(
            true,
            'should create AppComponent'
        );

        http.expectOne('thin2').flush(MOCK_CONFIG);
    }));
});
