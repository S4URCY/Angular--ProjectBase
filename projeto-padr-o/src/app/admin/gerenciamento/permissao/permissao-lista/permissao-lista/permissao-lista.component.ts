import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-permissao-lista',
  templateUrl: './permissao-lista.component.html',
  styleUrls: ['./permissao-lista.component.scss']
})
export class PermissaoListaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'descricao', 'nome', 'guard_name',  'acoes'];
  dataSource = new MatTableDataSource([]);
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  novo() {
    this.router.navigateByUrl('/admin/gerenciamento/permissao/formulario/nova').then(r => {
      console.log(r);
    });
  }

}
