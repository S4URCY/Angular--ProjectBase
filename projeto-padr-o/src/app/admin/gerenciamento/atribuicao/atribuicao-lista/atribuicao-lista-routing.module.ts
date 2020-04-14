import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AtribuicaoListaComponent} from './atribuicao-lista/atribuicao-lista.component';


const routes: Routes = [
  {path: '', component: AtribuicaoListaComponent, data: {title: 'Lista das atribuições'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtribuicaoListaRoutingModule { }
