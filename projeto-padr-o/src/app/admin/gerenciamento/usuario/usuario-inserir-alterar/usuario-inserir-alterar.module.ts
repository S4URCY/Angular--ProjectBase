import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsuarioInserirAlterarRoutingModule} from './usuario-inserir-alterar-routing.module';
import {FormularioUsuarioComponent} from './formulario-usuario/formulario-usuario.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import {MaterialModule} from '../../../../shared/material.module';
import {NgxMaskModule} from 'ngx-mask';
import {ListboxModule} from 'primeng/listbox';

@NgModule({
    declarations: [FormularioUsuarioComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RxReactiveFormsModule,
        MaterialModule,
        NgxMaskModule.forRoot(),
        UsuarioInserirAlterarRoutingModule,
        ListboxModule
    ]
})
export class UsuarioInserirAlterarModule {
}
