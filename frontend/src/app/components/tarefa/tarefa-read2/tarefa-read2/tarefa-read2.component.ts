import { Tarefa } from '../../tarefa.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TarefaRead2DataSource} from './tarefa-read2-datasource';

@Component({
  selector: 'app-tarefa-read2',
  templateUrl: './tarefa-read2.component.html',
  styleUrls: ['./tarefa-read2.component.css']
})
export class TarefaRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Tarefa>;
  dataSource: TarefaRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Titulo', 'Descricao', 'Categoria','dataConclusao'];

  constructor() {
    this.dataSource = new TarefaRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
