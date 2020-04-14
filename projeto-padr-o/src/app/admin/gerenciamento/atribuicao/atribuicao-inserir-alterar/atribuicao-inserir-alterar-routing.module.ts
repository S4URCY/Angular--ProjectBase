import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AtribuicaoInserirAlterarComponent} from './atribuicao-inserir-alterar/atribuicao-inserir-alterar.component';



const routes: Routes = [
  {path: 'nova', component: AtribuicaoInserirAlterarComponent, data: {title: 'Nova atribuição'}},
  {path: 'alterar/:id', component: AtribuicaoInserirAlterarComponent, data: {title: 'Alterar atribuição'}},
  {path: '', redirectTo: 'nova', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtribuicaoInserirAlterarRoutingModule { }
