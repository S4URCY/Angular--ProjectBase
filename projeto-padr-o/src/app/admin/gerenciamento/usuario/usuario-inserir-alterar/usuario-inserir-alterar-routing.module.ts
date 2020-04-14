import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormularioUsuarioComponent} from './formulario-usuario/formulario-usuario.component';


const routes: Routes = [
    {
        path: '', children: [
            {path: 'novo', component: FormularioUsuarioComponent, data: {title: 'Cadastrar Usuário'}},
            {path: 'alterar/:id', component: FormularioUsuarioComponent, data: {title: 'Alterar Usuário'}},
            {path: '', redirectTo: 'novo', pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioInserirAlterarRoutingModule {
}
