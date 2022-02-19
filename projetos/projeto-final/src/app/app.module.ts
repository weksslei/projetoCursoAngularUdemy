import { TarefasModule } from './tarefas/tarefas.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora/calculadora.module';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app--routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DashboardModule,
    CalculadoraModule,
    JogoDaVelhaModule,
    TarefasModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
