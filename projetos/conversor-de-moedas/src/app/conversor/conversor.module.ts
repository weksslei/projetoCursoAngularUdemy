import { FormsModule } from '@angular/forms';
import { ConversorService } from './services/conversor.service';
import { MoedaService } from './services/moeda.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components/conversor.component';
import { NumeroDirective } from './directive/numero.directive';
import { ModalCotacaoComponent } from './utils/modal-cotacao.component';
import { DataBrPipe } from './pipe/data-br.pipe';




@NgModule({
  declarations: [
    ConversorComponent, 
    NumeroDirective, ModalCotacaoComponent, DataBrPipe],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[ ConversorComponent],
  providers: [MoedaService, ConversorService]
})
export class ConversorModule { }
