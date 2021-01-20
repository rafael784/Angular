import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { routing } from './app.router';

import {HttpClientModule} from '@angular/common/http';
import { HadwareService } from './service/hadware.service';
import { EdicaoProdutoComponent } from './edicao-produto/edicao-produto.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    CadastroProdutoComponent,
    EdicaoProdutoComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    routing,
    FormsModule,
    
  ],
  providers: [
    HadwareService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
