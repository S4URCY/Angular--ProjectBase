import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadesRoutingModule } from './cidades-routing.module';
import { CidadesListaComponent } from './cidades-lista/cidades-lista.component';


@NgModule({
  declarations: [CidadesListaComponent],
  imports: [
    CommonModule,
    CidadesRoutingModule
  ]
})
export class CidadesModule { }
