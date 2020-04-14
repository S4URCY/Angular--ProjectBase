import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtribuicaoListaRoutingModule } from './atribuicao-lista-routing.module';
import { AtribuicaoListaComponent } from './atribuicao-lista/atribuicao-lista.component';
import {MaterialModule} from '../../../../shared/material.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [AtribuicaoListaComponent],
  imports: [
    CommonModule,
      MaterialModule,
      HttpClientModule,
    AtribuicaoListaRoutingModule
  ]
})
export class AtribuicaoListaModule { }
