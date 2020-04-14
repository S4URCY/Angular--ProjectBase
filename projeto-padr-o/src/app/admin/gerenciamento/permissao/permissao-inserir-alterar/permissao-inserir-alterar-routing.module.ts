import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PermissaoInserirAlterarComponent} from './permissao-inserir-alterar/permissao-inserir-alterar.component';


const routes: Routes = [
  {path: 'nova', component: PermissaoInserirAlterarComponent, data: {title: 'Cadastrar permissão'}},
  {path: 'alterar/:id', component: PermissaoInserirAlterarComponent, data: {title: 'Alterar permissão'}},
  {path: '', redirectTo: 'nova', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissaoInserirAlterarRoutingModule { }
