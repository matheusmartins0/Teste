import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-tarefa-crud',
  templateUrl: './tarefa-crud.component.html',
  styleUrls: ['./tarefa-crud.component.css']
})
export class TarefaCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
    navigateToTarefaCreate(): void {
      this.router.navigate(['/tarefas/create'])
    }

  }


