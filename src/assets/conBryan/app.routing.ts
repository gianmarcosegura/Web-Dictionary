import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: './../app/views/home/home.module#HomeViewModule' },
    { path: 'about', loadChildren: './../app/views/about/about.module#AboutViewModule' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, { useHash: true })]
})
export class AppRoutingModule { }
