import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Testando calculadora deve garantir que 1 + 4 = 5 ",
    (inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
    ));

  it("Testando calculadora deve garantir que 10 - 4 = 6 ",
    (inject([CalculadoraService], (service: CalculadoraService) => {
      let sub = service.calcular(10, 4, CalculadoraService.SUBTRACAO);
      expect(sub).toEqual(6);
    })
    ));

  it("Testando calculadora deve garantir que 5 * 4 = 20 ",
    (inject([CalculadoraService], (service: CalculadoraService) => {
      let multi = service.calcular(5, 4, CalculadoraService.MULTIPLICACAO);
      expect(multi).toEqual(20);
    })
    ));

  it("Testando calculadora deve garantir que 20 / 4 = 5 ",
    (inject([CalculadoraService], (service: CalculadoraService) => {
      let div = service.calcular(20, 4, CalculadoraService.DIVISAO);
      expect(div).toEqual(5);
    })
    ));

  it("Deve retornar 0 em uma operação inválida ",
    (inject([CalculadoraService], (service: CalculadoraService) => {
      let opInvalid = service.calcular(20, 4, "%");
      expect(opInvalid).toEqual(0);
    })
    ));

});
