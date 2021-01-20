import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { EdicaoProdutoComponent } from './edicao-produto/edicao-produto.component';

const ROTAS: Routes = [
    { path: '', component: HomeComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'cadastro-produto', component: CadastroProdutoComponent },
    { path: 'edicao-produto', component: EdicaoProdutoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROTAS);