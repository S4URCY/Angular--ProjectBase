import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../../../../../shared/myErrorStateMatcher';
import {RxwebValidators} from '@rxweb/reactive-form-validators';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-formulario-usuario',
    templateUrl: './formulario-usuario.component.html',
    styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {
    mask = '';
    readonly CPF = 0;
    readonly CNPJ = 1;
    maskType: number;
    emailPattern = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    formUsuario: FormGroup = new FormGroup({
            id: new FormControl(null),
            nome: new FormControl(null, [Validators.required]),
            nif: new FormControl(null),
            email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
            telefone: new FormControl(null, [Validators.required]),
            is_active: new FormControl(1),
            password: new FormControl(null),
            password_confirmation: new FormControl(null, []),
            roles: new FormControl([], [Validators.required]),
        }
    );
    tipoComponente = false;
    matcher = new MyErrorStateMatcher();

    rolesDB: any[] = [
        {
            'id': 1,
            'name': 'super_administrador',
            'description': 'Super Administrador',
            'guard_name': 'web',
            'type_user': 0,
        },
        {
            'id': 2,
            'name': 'teste',
            'description': 'teste',
            'guard_name': 'teste',
            'type_user': 0,
        },
    ];


    constructor(private router: Router, private activeRouter: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activeRouter.params.subscribe(
            (p) => {
                if (p.id !== undefined) {
                    //Implementar o service para buscar por ID e preencher o formulario.
                    this.tipoComponente = true;

                    //Quando for alteração não apresentar o campo de senha.
                } else {
                    this.tipoComponente = false;
                    this.formUsuario.get('password').setValidators([Validators.required, Validators.minLength(8)]);
                    this.formUsuario.get('password_confirmation').setValidators([Validators.required,
                        RxwebValidators.compare({fieldName: 'password', message: 'A senha deve ser iguais'}), Validators.minLength(8)]);
                }
            }
        );
    }

    changed(inpMask: any) {
        const value = inpMask;
        if (value.length > 14) {
            this.setMask(this.CNPJ);
        } else {
            this.setMask(this.CPF);
        }
    }

    setMask(type: number) {
        if (type < 0 || type > 1 || type === this.maskType) {
            return;
        }
        this.maskType = type;
        if (type === this.CPF) {
            this.mask = '000.000.000-00999';
        } else {
            this.mask = '00.000.000/0000-00';
        }
    }

    salvar() {
        console.log(this.formUsuario.value);
    }


}
