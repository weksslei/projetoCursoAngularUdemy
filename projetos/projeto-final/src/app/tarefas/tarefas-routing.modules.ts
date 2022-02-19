import { CadastrarTarefasComponent } from './cadastrar/cadastrar-tarefas.component';
import { ListarTarefaComponent } from './listar';
import { Routes } from "@angular/router";
import { EditarTarefasComponent } from '.';

export const TarefasRoutes: Routes= [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path:"tarefas/listar",
        component: ListarTarefaComponent
    },
    {
        path:"tarefas/cadastrar",
        component: CadastrarTarefasComponent
    },
    {
        path:"tarefas/editar/:id",
        component: EditarTarefasComponent
    },

]