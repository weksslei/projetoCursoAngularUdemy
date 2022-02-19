import { CalculadoraService } from './services/calculadora.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './componente/calculadora.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraRoutes } from './calculadora-routing.module';




@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[CalculadoraComponent,
  ],
  providers:[
    CalculadoraService
  ]
})
export class CalculadoraModule { }
