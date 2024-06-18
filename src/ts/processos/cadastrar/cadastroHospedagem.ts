import Processo from "../../abstracoes/processo";
import DiretorCasalSimples from "../../diretores/diretorCasalSimples";
import DiretorFamiliaMais from "../../diretores/diretorFamiliaMais";
import DiretorFamiliaSimples from "../../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../../diretores/diretorSolteiroMais";
import DiretorSolteiroSimples from "../../diretores/diretorSolteiroSimples";
import Armazem from "../../dominio/armazem";
import Acomodacao from "../../modelos/acomodacao";
import Cliente from "../../modelos/cliente";
import Hospedagem from "../../modelos/hospedagem";
import ControleHospedagem from "../controleHospedagem";


export default class CadastroHospedagem extends Processo { 
  private armazem: Armazem;

  constructor(private controleHospedagem: ControleHospedagem) {
    super();
    this.armazem = Armazem.InstanciaUnica;
  }

  processar(): void {
    console.log("Iniciando o cadastro de hospedagem...");
    let nomeCliente = this.entrada.receberTexto("Digite o nome do cliente:");
    let cliente = this.armazem.Clientes.find(
      (c) => c.Nome === nomeCliente
    );

    if (cliente) {      
      let hospedagemExistente = this.controleHospedagem.getHospedagemPorCliente(
        cliente
      );

      if (hospedagemExistente) {
        console.log("Cliente já está hospedado.");
        return;
      }
    
      this.controleHospedagem.listarAcomodacoesDisponiveis();

      let indiceAcomodacao =
        this.entrada.receberNumero("Digite o número da acomodação desejada: ") -
        1;

      let acomodacoesDisponiveis =
        this.controleHospedagem.getAcomodacoesDisponiveis();

      if (
        indiceAcomodacao >= 0 &&
        indiceAcomodacao < acomodacoesDisponiveis.length
      ) {
        let acomodacao = acomodacoesDisponiveis[indiceAcomodacao];

        
        let acomodacaoNoArmazem = Armazem.InstanciaUnica.Acomodacoes.find(
          (a) => a.NomeAcomadacao === acomodacao.NomeAcomadacao
        );

        if (acomodacaoNoArmazem) {
          let dataEntrada = this.entrada.receberData("Digite a data de entrada:");

          let hospedagem = new Hospedagem(cliente, acomodacao, dataEntrada);
        this.controleHospedagem.adicionarHospedagem(hospedagem);

        
        this.controleHospedagem.removerAcomodacao(acomodacao);

        Armazem.InstanciaUnica.Acomodacoes = this.controleHospedagem.getAcomodacoesDisponiveis();

        console.log("Hospedagem cadastrada com sucesso!");
      } else {
        console.log("Opção de acomodação inválida.");
      }
    } else {
      console.log("Cliente não encontrado.");
    }
  }
}
}