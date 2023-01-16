import { Component } from '@angular/core';

@Component({
  selector: 'app-jsoformato',
  templateUrl: './jsoformato.component.html',
  styles: [
  ]
})
export class JsoformatoComponent {

  modelo: object =
  [
    {
      nombre: 'Jairo',
      apellido: 'Manchay',
      dni: '72380956',
      movil: '912713792',
      carrera: 'Ingeniero de Sistemas'
    },
    {
      nombre: 'Cecilia',
      apellido: 'Perez',
      dni: '10085749',
      movil: '942191827',
      carrera: 'Contadora'
    }
  ]
}
