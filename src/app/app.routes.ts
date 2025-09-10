import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailsComponent } from './Pages/details/details.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'detail/:countryId',
        component: DetailsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
