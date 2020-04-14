import { Component, OnInit } from '@angular/core';
import {MyErrorStateMatcher} from '../../../../../shared/myErrorStateMatcher';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-permissao-inserir-alterar',
  templateUrl: './permissao-inserir-alterar.component.html',
  styleUrls: ['./permissao-inserir-alterar.component.scss']
})
export class PermissaoInserirAlterarComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  tipoComponente = false;
  formPermicao: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
        (parametro) => {
          if (parametro.id !== undefined) {
            //Implementar o service para buscar por ID e preencher o formulario.

            this.tipoComponente = true;
          } else {
            this.tipoComponente = false;
          }
        }
    );
  }
  salvar() {

  }

}
