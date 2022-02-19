import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraRoutes } from './calculadora/calculadora-routing.module';
import { CalculadoraComponent } from './calculadora/componente';
import { ConversorComponent } from './conversor';
import { ConversorRoutes } from './conversor/conversor-routing.module';
import { DashboardRoutes } from './dashboard/dashboard.modulle';
import { JogoDaVelhaRoutes } from './jogo-da-velha/jogo-da-velha-routing.module';
import { Tarefa, TarefasRoutes } from './tarefas';
export const routes :Routes = [
    { path: '', redirectTo: './dashboard',
    pathMatch: 'full'
    },

    ...DashboardRoutes,
    ...CalculadoraRoutes,
    ...ConversorRoutes,
    ...JogoDaVelhaRoutes,
    ...TarefasRoutes,
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}