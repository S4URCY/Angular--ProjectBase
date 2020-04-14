import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', children: [
      {path: 'atribuicoes', loadChildren: () => import('./atribuicao-lista/atribuicao-lista.module').then(m => m.AtribuicaoListaModule)},
      {path: 'formulario', loadChildren: () => import('./atribuicao-inserir-alterar/atribuicao-inserir-alterar.module').then(m => m.AtribuicaoInserirAlterarModule)},
      {path: '', redirectTo: 'atribuicoes', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtribuicaoRoutingModule { }
