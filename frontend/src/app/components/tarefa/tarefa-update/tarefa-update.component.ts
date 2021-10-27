import { Tarefa } from './../tarefa.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from './../tarefa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa-update',
  templateUrl: './tarefa-update.component.html',
  styleUrls: ['./tarefa-update.component.css']
})
export class TarefaUpdateComponent implements OnInit {

  tarefa!: Tarefa

  constructor( private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void { 
    const id= this.route.snapshot.paramMap.get('id')
    this.tarefaService.readById(id).subscribe(tarefa =>{
      this.tarefa = tarefa
    });
  }


 updateTarefa(): void{
   this.tarefaService.update(this.tarefa).subscribe(() =>{
     this.tarefaService.showMessage('Atualizado com sucesso!')
     this.router.navigate(["/tarefas"])
    });

 }

 cancel(): void {
  this.router.navigate(["/tarefas"])

 }
}
