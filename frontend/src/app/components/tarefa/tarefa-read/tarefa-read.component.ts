
import { Tarefa } from './../tarefa.model';
import { Router } from '@angular/router';
import { TarefaService } from './../tarefa.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tarefa-read',
  templateUrl:'./tarefa-read.component.html',
  styleUrls: ['./tarefa-read.component.css']
})


export class TarefaReadComponent implements OnInit {


    tarefas!: Tarefa[]   
    displayedColumns= ['id','Titulo','Descricao','Categoria','dataConclusao', 'action']
   
 

  constructor(private tarefaService: TarefaService,
    private router: Router) { }

  ngOnInit(): void { 
    this.tarefaService.read().subscribe(tarefas =>{
      this.tarefas = tarefas
    })
  }
  


}
