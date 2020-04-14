import {Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit} from '@angular/core';

// Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    nameNav?: string;
    collapse?: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    nameNav?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [{
    path: '/admin/dashboard',
    title: 'Dashboard',
    nameNav: 'Dashboard',
    type: 'link',
    icontype: 'nc-icon nc-bank'
}, {
    path: '/admin/gerenciamento/',
    title: 'Acesso',
    type: 'sub',
    collapse: 'components',
    icontype: 'nc-icon nc-circle-10',
    children: [
        {path: 'usuario/usuarios', title: 'Usuários', ab: 'U', nameNav: 'Usuários'},
        {path: 'atribuicao/atribuicoes', title: 'Atribuição', ab: 'A', nameNav: 'Atribuição'},
        {path: 'permissao/permissoes', title: 'Permissões', ab: 'P', nameNav: 'Permissões'},
    ]
}
];

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

    perfil = require('../../../../../assets/img/default-avatar.png');
    public menuItems: RouteInfo[];

    isNotMobileMenu() {
        if (window.outerWidth > 991) {
            return false;
        }
        return true;
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
    }
}
