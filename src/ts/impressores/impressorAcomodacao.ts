import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";

export default class ImpressorAcomodacao implements Impressor {
  private acomodacao: Acomodacao;

  constructor(acomodacao: Acomodacao) {
    this.acomodacao = acomodacao;
  }

  imprimir(): string {
    return `Tipo: ${this.acomodacao.NomeAcomadacao}\n` +
           `-- Capacidade: ${this.acomodacao.Capacidade}\n` +
           `-- Valor da diária: R$${this.acomodacao.Valor.toFixed(2)}\n`; 
  }
}
