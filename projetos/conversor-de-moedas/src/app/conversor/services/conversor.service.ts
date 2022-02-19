import { Injectable } from '@angular/core';
// Importamos o HttpClient ao invés do Http para o Angular 7
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
 Conversao,
 ConversaoResponse 
} from '../models';
@Injectable()
export class ConversorService {
  // Nova url do fixer.io, que adiciona o parâmetro access_key, que é a chave de autenticação 
  //private readonly BASE_URL = "http://api.fixer.io/latest";
 // private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=c630001e09f5ffe3ac686255f6dec129";
 private readonly BASE_URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";
  constructor(private http: HttpClient) {}
  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param Conversao conversao
   * @return Observable<ConversaoResponse>
   */
  converter(conversao: Conversao): Observable<any> {
   let params = `?base=${conversao.moedaDe}?symbols=${conversao.moedaPara}`;
  return this.http
      .get(this.BASE_URL + params);
      // No Angular 6 as duas próximas linha não são mais necessárias
      //.map(response => response.json() as ConversaoResponse)
      //.catch(error => Observable.throw(error));
  }
  /**
   * Retorna a cotação para dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, 
 conversao: Conversao): number {
  if (!conversaoResponse) {
   return 0;
  }
  return conversaoResponse.rates[<any>conversao.moedaPara];
  }
  /**
   * Retorna a cotação de dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse, 
 conversao: Conversao): string {
  if (conversaoResponse) {
    //alert("Não esta passando valor");
  }
  return (1 / conversaoResponse?.rates[<any>conversao.moedaPara])
  .toFixed(4);
  }
  /**
   * Retorna a data da cotação dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    return conversaoResponse.date;
  }
}
