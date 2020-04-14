import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaUsuarioComponent} from './lista-usuario/lista-usuario.component';


const routes: Routes = [
  {path: '', children: [
      {path: '', component: ListaUsuarioComponent, data: {title: 'Lista dos usuário'}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioListaRoutingModule { }
