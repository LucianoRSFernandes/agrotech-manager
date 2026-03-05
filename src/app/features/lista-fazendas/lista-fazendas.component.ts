import { Component, OnInit } from '@angular/core';
import { Fazenda } from '../../models/fazenda.model';
import { FazendaService } from '../../services/fazenda.service';

@Component({
  selector: 'app-lista-fazendas',
  templateUrl: './lista-fazendas.component.html'
})
export class ListaFazendasComponent implements OnInit {
  fazendas: Fazenda[] = [];

  constructor(private fazendaService: FazendaService) { }

  ngOnInit(): void {
    this.fazendaService.getFazendas().subscribe(dados => this.fazendas = dados);
  }

  excluir(id: number): void {
    if (confirm('Deseja realmente excluir esta fazenda?')) {
      this.fazendaService.excluirFazenda(id).subscribe({
        next: () => {
          // No front, removemos da lista local para o usuário ver a mudança na hora
          this.fazendas = this.fazendas.filter(f => f.id !== id);
          alert('Fazenda removida!');
        },
        error: (err) => console.error('Erro ao excluir', err)
      });
    }
  }
}