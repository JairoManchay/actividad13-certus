import { Component } from '@angular/core';
import { ListaMonedas } from '../../models/lista-monedas';
import { Registro } from '../../models/registro';

@Component({
  selector: 'app-list-monetaria',
  templateUrl: './list-monetaria.component.html',
  styles: [
  ]
})
export class ListMonetariaComponent {

  model: Registro={
    numero: 0,
    monedas:ListaMonedas.escoge
  }

  // monedas: ListaMonedas=ListaMonedas.escoge;

  monedasArrya:any[] = [];

  ngOnInit(){
    for(let item in ListaMonedas){
      if(isNaN(Number(item))){
        this.monedasArrya.push({texto: item, value: ListaMonedas[item]})
      }
    }
  }
}
