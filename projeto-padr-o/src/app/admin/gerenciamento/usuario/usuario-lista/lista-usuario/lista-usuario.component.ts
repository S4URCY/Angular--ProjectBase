import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-lista-usuario',
    templateUrl: './lista-usuario.component.html',
    styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {

    displayedColumns: string[] = ['id', 'name', 'email', 'telefone', 'acoes'];
    dataSource = new MatTableDataSource([]);

    readonly CPF = 0;
    readonly CNPJ = 1;
    maskType: number;
    mask = '';
    // excluirUsuario: User;
    excluirUsuario: any;
    pEditar: boolean;
    pExcluir: boolean;
    pCriar: boolean;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    user = [
        {
            id: 1,
            name: 'DIXBPO',
            email: 'DIXBPO@GMAIL.COM',
            telefone: '6334569054',
        }
    ];

    constructor(private router: Router, private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.atualizarLista();
    }

    atualizarLista() {
        // implementar o service

        this.dataSource = new MatTableDataSource(this.user);
        setTimeout(() => {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort
        }, 100);
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

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    openExcluir(content, usuario) {
        console.log(usuario);
        this.changed(usuario?.email);
        this.excluirUsuario = usuario;
        this.modalService.open(content, {size: 'lg'});
    }

    excluir(id: number) {
        console.log(id);

    }

}
