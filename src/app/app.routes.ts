import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';

// import { Name2Component } from './';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'dictionary', component: DictionaryComponent },
    { path: '**', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
