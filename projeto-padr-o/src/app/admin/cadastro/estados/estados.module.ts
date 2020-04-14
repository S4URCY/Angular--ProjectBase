import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadosRoutingModule } from './estados-routing.module';
import { EstadosListaComponent } from './estados-lista/estados-lista.component';


@NgModule({
  declarations: [EstadosListaComponent],
  imports: [
    CommonModule,
    EstadosRoutingModule
  ]
})
export class EstadosModule { }
