import { Routes } from '@angular/router';

import { PerfilComponent } from './perfil.component';

export const UserRoutes: Routes = [
    {path: '', component: PerfilComponent, data: {title: 'Perfil usuário'}}
    ];
