export interface Fazenda {
  id: number;
  nome: string;
  tamanhoHectares: number;
  cultura: string;
  status: 'Ativa' | 'Em Descanso' | 'Colheita';
}