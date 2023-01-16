import { Component, Input } from '@angular/core';
import { ListaMonedas } from '../../models/lista-monedas';

@Component({
  selector: 'app-muestra-datos',
  templateUrl: './muestra-datos.component.html'
})
export class MuestraDatosComponent {

  @Input() model={monedas:ListaMonedas.escoge, numero:0};
}
