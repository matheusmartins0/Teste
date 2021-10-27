import { TarefaDeleteComponent } from './components/tarefa/tarefa-delete/tarefa-delete.component';
import { TarefaUpdateComponent } from './components/tarefa/tarefa-update/tarefa-update.component';
import { TarefaCreateComponent } from './components/tarefa/tarefa-create/tarefa-create.component';
import { TarefaCrudComponent } from './views/tarefa-crud/tarefa-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
  path: "",
  component: HomeComponent
},
{ 
path:"tarefas",
  component: TarefaCrudComponent
},
{
  path: "tarefas/create",
  component: TarefaCreateComponent
},
{
  path: "tarefas/update/:id",
  component: TarefaUpdateComponent
},

{
  path: "tarefas/delete/:id",
  component: TarefaDeleteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
