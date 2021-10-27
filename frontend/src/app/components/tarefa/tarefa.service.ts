import { Tarefa } from './tarefa.model';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  baseUrl ="http://localhost:3001/tarefas"

 

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

showMessage(msg: string): void{
this.snackBar.open(msg, 'X', {
  duration: 3000,
  horizontalPosition: "right",
  verticalPosition: "top"
})
}

  create(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.post<Tarefa>(this.baseUrl, tarefa);
  }
  read(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.baseUrl);
  }

  readById(id: number): Observable<Tarefa>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Tarefa>(url);
  }

  update (tarefa: Tarefa): Observable<Tarefa>{
    const url = `${this.baseUrl}/${tarefa.id}`
    return this.http.put<Tarefa>(url, tarefa);
  }

  delete (id: number): Observable<Tarefa> {
    const url =`${this.baseUrl}/${id}`
    return this.http.delete<Tarefa>(url);
  }
}
