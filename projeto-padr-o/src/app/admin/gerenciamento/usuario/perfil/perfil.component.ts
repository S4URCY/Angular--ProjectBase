import {Component, OnInit} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'user-cmp',
    templateUrl: 'perfil.component.html'
})

export class PerfilComponent implements OnInit {
    perfil = require('../../../../../assets/img/default-avatar.png');
    ngOnInit(): void {
    }

}
