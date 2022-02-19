import { Injectable } from '@angular/core';
import { Moeda } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas!: Moeda[];

  constructor() {}

  private moedasObj = [ //http://fixer.io
	{ "sigla": "AUD", "descricao": "DÃ³lar australiano" },
	{ "sigla": "BGN", "descricao": "Lev bÃºlgaro" },
	{ "sigla": "BRL", "descricao": "Real brasileiro" },
	{ "sigla": "CAD", "descricao": "DÃ³lar canadense" },
	{ "sigla": "CHF", "descricao": "Franco suÃ­Ã§o" },
	{ "sigla": "CNY", "descricao": "Yuan ChinÃªs" },
	{ "sigla": "CZK", "descricao": "Coroa RepÃºblica Tcheca" },
	{ "sigla": "DKK", "descricao": "Coroa dinamarquesa" },
	{ "sigla": "EUR", "descricao": "Euro" },
	{ "sigla": "GBP", "descricao": "Libra Esterlina" },
	{ "sigla": "HKD", "descricao": "DÃ³lar de Hong Kong" },
	{ "sigla": "HRK", "descricao": "Coroa CroÃ¡cia" },
	{ "sigla": "HUF", "descricao": "Florim hÃºngaro" },
	{ "sigla": "IDR", "descricao": "Rupia indonÃ©sia" },
	{ "sigla": "ILS", "descricao": "Novo shekel israelense" },
	{ "sigla": "INR", "descricao": "Rupia indiana" },
	{ "sigla": "JPY", "descricao": "Iene japonÃªs" },
	{ "sigla": "KRW", "descricao": "Won sul-coreano" },
	{ "sigla": "MXN", "descricao": "Peso mexicano" },
	{ "sigla": "MYR", "descricao": "MalÃ¡sia Ringgit" },
	{ "sigla": "NOK", "descricao": "Coroa Noruega" },
	{ "sigla": "NZD", "descricao": "DÃ³lar da Nova ZelÃ¢ndia" },
	{ "sigla": "PHP", "descricao": "Peso filipino" },
	{ "sigla": "PLN", "descricao": "ZÅ‚oty PolÃ³nia" },
	{ "sigla": "RON", "descricao": "Leu romeno" },
	{ "sigla": "RUB", "descricao": "Belarus Ruble" },
	{ "sigla": "SEK", "descricao": "Coroa SuÃ©cia" },
	{ "sigla": "SGD", "descricao": "DÃ³lar de Singapura" },
	{ "sigla": "THB", "descricao": "Baht TailÃ¢ndia" },
	{ "sigla": "TRY", "descricao": "Lira turca" },
	{ "sigla": "USD", "descricao": "DÃ³lar dos Estados Unidos" }, 
	{ "sigla": "ZAR", "descricao": "Rand Ãfrica do Sul" }
  ];

  listarTodas(): Moeda[] {
  	if (this.moedas) {
  		return this.moedas;
  	} 
  	
  	this.moedas = [];

  	for (let moedaObj of this.moedasObj) {
  		let moeda: Moeda = new Moeda();
  		Object.assign(moeda, moedaObj);
  		this.moedas.push(moeda);
  	}

  	return this.moedas;
  }
}
