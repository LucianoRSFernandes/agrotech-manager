import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // OBRIGATÓRIO

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFazendasComponent } from './features/lista-fazendas/lista-fazendas.component';
import { CadastroFazendaComponent } from './features/cadastro-fazenda/cadastro-fazenda.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaFazendasComponent,
    CadastroFazendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
