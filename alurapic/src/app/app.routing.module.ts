import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'

    },
    {
        path: 'user/:username',
        component: PhotoListComponent,
        resolve: { photos: PhotoListResolver },
        data: {
            title: 'Timeline'
        }

    },
    {
        path: 'photo/add',
        component: PhotoFormComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Photo upload'
        }
    },
    {
        path: 'photo/:id',
        component: PhotoDetailsComponent,
        data: {
            title: 'Photo details'
        }
    },
    {
        path: 'error',
        component: GlobalErrorComponent,
        data: { 
            title: 'Error'
        }
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]

})
export class AppRoutingModule { }