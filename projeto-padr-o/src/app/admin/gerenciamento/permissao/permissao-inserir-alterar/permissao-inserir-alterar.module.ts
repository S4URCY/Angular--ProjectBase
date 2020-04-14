import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PermissaoInserirAlterarRoutingModule} from './permissao-inserir-alterar-routing.module';
import {PermissaoInserirAlterarComponent} from './permissao-inserir-alterar/permissao-inserir-alterar.component';
import {MaterialModule} from '../../../../shared/material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [PermissaoInserirAlterarComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        PermissaoInserirAlterarRoutingModule
    ]
})
export class PermissaoInserirAlterarModule {
}
