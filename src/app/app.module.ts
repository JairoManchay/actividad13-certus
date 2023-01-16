import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatoModule } from './formato/formato.module';
import { MonedasModule } from './monedas/monedas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MonedasModule,
    FormatoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
