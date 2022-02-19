import { Tarefa } from './../shared/tarefa.model';
import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { iif } from 'rxjs';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }
  
  remover($event: any, tarefa: Tarefa): void{
    $event.preventDefault(); // Desabilitar atualização padrão da pagina
    if(confirm("Deseja remover a tarefa"+ tarefa.nome + "?"))
    this.tarefaService.remover(tarefa.id);
    this.tarefas = this.listarTodos();
  }
  
  alterarStatus(tarefa: Tarefa):void{
    if(confirm("Deseja alterar o starus da tarefa"+ tarefa.nome + "?"))
    this.tarefaService.alterarStatus(tarefa.id);
    this.listarTodos();
  }
}
