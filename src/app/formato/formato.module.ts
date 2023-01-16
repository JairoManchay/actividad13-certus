import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsoformatoComponent } from './jsoformato/jsoformato.component';



@NgModule({
  declarations: [
    JsoformatoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JsoformatoComponent
  ]
})
export class FormatoModule { }
