import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from './../tarefa.model';
import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa-delete',
  templateUrl: './tarefa-delete.component.html',
  styleUrls: ['./tarefa-delete.component.css']
})
export class TarefaDeleteComponent implements OnInit {

  tarefa!: Tarefa

  constructor( private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tarefaService.readById(id).subscribe(tarefa =>{
      this.tarefa = tarefa
    })
  }

deleteTarefa(): void{
  this.tarefaService.delete(this.tarefa.id).subscribe(() => {
    this.tarefaService.showMessage('Tarefa excluida!')
    this.router.navigate(['/tarefas']);
  })
}

cancel(): void {
  this.router.navigate(['/tarefas']);
}

}
