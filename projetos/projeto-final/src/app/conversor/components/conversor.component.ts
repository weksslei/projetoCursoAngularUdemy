import { NgForm } from '@angular/forms';
import { ConversaoResponse } from './../models/conversao-resposta';
import { ConversorService } from './../services/conversor.service';
import { MoedaService } from './../services/moeda.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Conversao, Moeda } from '../models';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas?: Moeda[];
  conversao!: Conversao | null;
  possuiErro?: boolean;
  conversaoResponse?: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true })
  conversaoForm!: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
    ) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init()
  }


  init(): void{
    this.conversao = new Conversao("USD", "BRL",);
    this.possuiErro = false;
  }

  converter(): void{
    if(this.conversaoForm.form.valid) {
      this.conversorService.converter(this.conversao!).subscribe(
        response => this.conversaoResponse = response,
        error => this.possuiErro = true
      );
    }
  }

}
