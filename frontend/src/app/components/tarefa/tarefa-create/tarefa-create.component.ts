import { Tarefa } from '../tarefa.model';



import { Router } from '@angular/router';
import { TarefaService } from './../tarefa.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tarefa-create',
  templateUrl: './tarefa-create.component.html',
  styleUrls: ['./tarefa-create.component.css']
})


export class TarefaCreateComponent implements OnInit {

    tarefa: Tarefa ={
      id: '',
      Titulo: 'Roteador',
      Descricao: 'Consertar',
      Categoria: 'Fácil',
      dataConclusao: '28/10/2021',
      
    }

 

  constructor(private tarefaService: TarefaService,
    private router: Router) { }

  ngOnInit(): void {    
  
  }
  createTarefa(): void {
    this.tarefaService.create(this.tarefa).subscribe(() => {
    this.tarefaService.showMessage('Tarefa adicionada!')
    this.router.navigate(['/tarefas'])
});
}
cancel(): void {
  this.router.navigate(['/tarefas'])
}
}
