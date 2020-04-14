import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissaoListaRoutingModule } from './permissao-lista-routing.module';
import { PermissaoListaComponent } from './permissao-lista/permissao-lista.component';
import {MaterialModule} from '../../../../shared/material.module';


@NgModule({
  declarations: [PermissaoListaComponent],
  imports: [
    CommonModule,
      MaterialModule,
    PermissaoListaRoutingModule
  ]
})
export class PermissaoListaModule { }
