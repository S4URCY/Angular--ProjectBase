import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AtribuicaoInserirAlterarRoutingModule} from './atribuicao-inserir-alterar-routing.module';
import {AtribuicaoInserirAlterarComponent} from './atribuicao-inserir-alterar/atribuicao-inserir-alterar.component';
import {MaterialModule} from '../../../../shared/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ListboxModule} from 'primeng/listbox';


@NgModule({
    declarations: [AtribuicaoInserirAlterarComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        ListboxModule,
        AtribuicaoInserirAlterarRoutingModule
    ]
})
export class AtribuicaoInserirAlterarModule {
}
