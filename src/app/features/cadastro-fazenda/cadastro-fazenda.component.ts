import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FazendaService } from '../../services/fazenda.service';

@Component({
  selector: 'app-cadastro-fazenda',
  templateUrl: './cadastro-fazenda.component.html'
})
export class CadastroFazendaComponent implements OnInit {
  // O ponto de exclamação diz ao TS que iniciaremos a variável no ngOnInit
  fazendaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fazendaService: FazendaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fazendaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      tamanhoHectares: [null, [Validators.required, Validators.min(1)]],
      cultura: ['', Validators.required],
      status: ['Ativa']
    });
  }

  salvar(): void {
    if (this.fazendaForm.valid) {
      const novaFazenda = this.fazendaForm.value;

      this.fazendaService.adicionarFazenda(novaFazenda).subscribe({
        next: () => {
          alert('Fazenda cadastrada com sucesso no servidor!');
          this.router.navigate(['/listagem']);
        },
        error: (err: any) => {
          console.error('Erro ao conectar com o servidor', err);
          alert('Erro ao salvar. Verifique o console.');
        }
      });
    }
  }
}