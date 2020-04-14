import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../../../../../shared/myErrorStateMatcher';

@Component({
    selector: 'app-atribuicao-inserir-alterar',
    templateUrl: './atribuicao-inserir-alterar.component.html',
    styleUrls: ['./atribuicao-inserir-alterar.component.scss']
})
export class AtribuicaoInserirAlterarComponent implements OnInit {

    tipoComponente = false;
    formAtribuicao: FormGroup = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required]),
        type_user: new FormControl(null, [Validators.required]),
        permissions: new FormControl([], [Validators.required]),
    });
    permissaoDB: any[] = [
        {
            'id': 1,
            'name': 'permissions_view',
            'description': 'Visualiza as permissões',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 2,
            'name': 'permissions_create',
            'description': 'Cria nova permissão',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 3,
            'name': 'permissions_edit',
            'description': 'Edita permissões',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 4,
            'name': 'permissions_delete',
            'description': 'Deleta permissões',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 5,
            'name': 'roles_view',
            'description': 'Visualiza as atribuições',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 6,
            'name': 'roles_create',
            'description': 'Cria nova atribuição',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 7,
            'name': 'roles_edit',
            'description': 'Edita atribuições',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 8,
            'name': 'permissions_view',
            'description': 'Visualiza as permissões',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 9,
            'name': 'permissions_create',
            'description': 'Cria nova permissão',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 10,
            'name': 'permissions_edit',
            'description': 'Edita permissões',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 11,
            'name': 'permissions_delete',
            'description': 'Deleta permissões',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 12,
            'name': 'roles_view',
            'description': 'Visualiza as atribuições',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 13,
            'name': 'roles_create',
            'description': 'Cria nova atribuição',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        },
        {
            'id': 14,
            'name': 'roles_edit',
            'description': 'Edita atribuições',
            'guard_name': 'web',
            'created_at': '2020-02-12 14:20:04',
            'updated_at': '2020-02-12 14:20:04',
        }
    ];
    matcher = new MyErrorStateMatcher();

    constructor(private route: ActivatedRoute, private router: Router) {
    }


    ngOnInit(): void {
    }


    salvar() {
        console.log(this.formAtribuicao.value)
    }

}
