import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', children: [
      {path: 'permissoes', loadChildren: () => import('./permissao-lista/permissao-lista.module').then(m => m.PermissaoListaModule)},
      {path: 'formulario', loadChildren: () => import('./permissao-inserir-alterar/permissao-inserir-alterar.module').then(m => m.PermissaoInserirAlterarModule)},
      {path: '', redirectTo: 'permissoes', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissaoRoutingModule { }
