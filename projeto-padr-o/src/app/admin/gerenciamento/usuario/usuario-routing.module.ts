import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    // @ts-ignore
    {
        path: '', children: [
            {path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)},
            {path: 'usuarios', loadChildren: () => import('./usuario-lista/usuario-lista.module').then(m => m.UsuarioListaModule)},
            {path: 'formulario', loadChildren: () => import('./usuario-inserir-alterar/usuario-inserir-alterar.module').then(m => m.UsuarioInserirAlterarModule)}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {
}
