import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMonetariaComponent } from './list-monetaria/list-monetaria.component';
import { FormsModule } from '@angular/forms';

// importando la configuracion para las monedas
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';
import { MuestraDatosComponent } from './muestra-datos/muestra-datos.component';
registerLocaleData(localeEs, 'es-PE');


@NgModule({
  declarations: [
    ListMonetariaComponent,
    MuestraDatosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ListMonetariaComponent
  ],
  providers:[
    {
      provide: LOCALE_ID, useValue: 'es-PE'
    }
  ]
})
export class MonedasModule { }
