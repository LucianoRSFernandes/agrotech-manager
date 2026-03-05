import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFazendasComponent } from './features/lista-fazendas/lista-fazendas.component';
import { CadastroFazendaComponent } from './features/cadastro-fazenda/cadastro-fazenda.component';

const routes: Routes = [
  { path: 'listagem', component: ListaFazendasComponent },
  { path: 'cadastro', component: CadastroFazendaComponent },
  { path: '', redirectTo: '/listagem', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
