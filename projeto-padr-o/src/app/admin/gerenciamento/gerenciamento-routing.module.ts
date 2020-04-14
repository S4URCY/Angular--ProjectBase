import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', children: [
      {path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)},
      {path: 'permissao', loadChildren: () => import('./permissao/permissao.module').then(m => m.PermissaoModule)},
      {path: 'atribuicao', loadChildren: () => import('./atribuicao/atribuicao.module').then(m => m.AtribuicaoModule)},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciamentoRoutingModule { }
