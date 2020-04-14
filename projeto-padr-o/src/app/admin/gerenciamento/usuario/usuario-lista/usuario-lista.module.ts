import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { UsuarioListaRoutingModule } from './usuario-lista-routing.module';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';

import {MaterialModule} from '../../../../shared/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxMaskModule} from 'ngx-mask';



@NgModule({
  declarations: [ListaUsuarioComponent],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        UsuarioListaRoutingModule,
        NgxMaskModule.forRoot(),

    ]
})
export class UsuarioListaModule { }
