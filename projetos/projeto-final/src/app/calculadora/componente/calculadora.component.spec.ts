import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalculadoraService } from '../services';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers:[
        CalculadoraService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Deve garantir que 5 + 7 = 12 Simulando clicks nos botoões", ()=>{
    let btn5 = fixture.debugElement.query(By.css("#btn5"));
    let btnSoma = fixture.debugElement.query(By.css("#btnSoma"));
    let btn7 = fixture.debugElement.query(By.css("#btn7"));
    let btnCalcular = fixture.debugElement.query(By.css("#btnCalcular"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn5.triggerEventHandler("click", null);
    btnSoma.triggerEventHandler("click", null);
    btn7.triggerEventHandler("click", null);
    btnCalcular.triggerEventHandler("click", null);
    fixture.detectChanges();
    
    expect(display.nativeElement.value).toEqual("12");
  });

});
