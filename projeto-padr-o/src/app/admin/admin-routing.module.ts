import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {Page404Component} from './layouts/shared/page404/page404.component';


const routes: Routes = [
    {
        path: '', component: AdminLayoutComponent, children: [
            // @ts-ignore
            {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
            // @ts-ignore
            {path: 'gerenciamento', loadChildren: () => import('./gerenciamento/gerenciamento.module').then(m => m.GerenciamentoModule)},
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: '**', component: Page404Component, data: {title: '404'}},

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
