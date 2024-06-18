import Processo from "../../abstracoes/processo";
import ControleHospedagem from "../controleHospedagem"; // Importe ControleHospedagem
import ImpressorAcomodacao from "../../impressores/impressorAcomodacao";
import Impressor from "../../interfaces/impressor";
import Acomodacao from "../../modelos/acomodacao";

export default class ListagemAcomodacoes extends Processo {
  private acomodacoes: Acomodacao[];
  private impressor!: Impressor;

  constructor(private controleHospedagem: ControleHospedagem) { // Receba a instância de ControleHospedagem
    super();
    this.acomodacoes = this.controleHospedagem.getAcomodacoesDisponiveis(); // Use a instância recebida
  }

  processar(): void {
    console.clear();
    console.log("Iniciando a listagem das acomodações ofertadas...");
    console.log(`-------------------------------------------------`);

    if (this.acomodacoes.length > 0) {
      this.acomodacoes.forEach((acomodacao) => {
        let impressora = new ImpressorAcomodacao(acomodacao);
        console.log(impressora.imprimir());
        console.log(`-------------------------------------------------`);
      });
    } else {
      console.log("Não há acomodações disponíveis.");
    }
  }
}
