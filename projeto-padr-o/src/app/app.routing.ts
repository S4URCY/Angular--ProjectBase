import {Routes} from '@angular/router';



export const AppRoutes: Routes = [
    {path: '', redirectTo: 'publico', pathMatch: 'full'},
    // @ts-ignore
    {path: 'publico', loadChildren: () => import('./publico/publico.module').then(m => m.PublicoModule), data: {title: 'Publico DIXBPO'}},
    // @ts-ignore
    {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), data: {title: 'Admin DIXBPO'}},
];
