import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PermissaoListaComponent} from './permissao-lista/permissao-lista.component';


const routes: Routes = [
  {path: '', component: PermissaoListaComponent, data: {title: 'Lista das permissões'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissaoListaRoutingModule { }
