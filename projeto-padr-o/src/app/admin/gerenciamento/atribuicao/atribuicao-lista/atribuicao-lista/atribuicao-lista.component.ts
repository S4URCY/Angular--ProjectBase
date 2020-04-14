import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';

@Component({
  selector: 'app-atribuicao-lista',
  templateUrl: './atribuicao-lista.component.html',
  styleUrls: ['./atribuicao-lista.component.scss']
})
export class AtribuicaoListaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'descricao', 'nome',  'tipo_de_atribuicao', 'acoes'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
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
    this.router.navigateByUrl('/admin/gerenciamento/atribuicao/formulario/nova').then(r => r);
  }

}
