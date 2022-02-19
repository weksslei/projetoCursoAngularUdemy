import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalCotacaoComponent } from './../utils/modal-cotacao.component';
import { DataBrPipe } from './../pipe/data-br.pipe';
import { NumeroDirective } from './../directive/numero.directive';
import { ConversorService } from './../services/conversor.service';
import { MoedaService } from './../services/moeda.service';
import { Moeda } from './../models/moeda.models';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorComponent } from './conversor.component';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorComponent, NumeroDirective, DataBrPipe, ModalCotacaoComponent ],
      providers: [MoedaService, ConversorService],
      imports:[ FormsModule,HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
