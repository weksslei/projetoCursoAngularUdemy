import { RouterModule } from '@angular/router';
import { TarefaService , TarefaConcluidaDirective } from './shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar/editar-tarefas.component';


@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefasComponent,
    EditarTarefasComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
