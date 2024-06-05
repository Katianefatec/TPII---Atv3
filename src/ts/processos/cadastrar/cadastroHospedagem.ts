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
  private controleHospedagem: ControleHospedagem;
  private armazem: Armazem;

  constructor() {
    super();
    this.controleHospedagem = new ControleHospedagem();
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

      let tipoAcomodacao = this.entrada.receberNumero(
        "Escolha o tipo de acomodação: \n" +
          "1 - Casal Simples\n" +
          "2 - Família Simples\n" +
          "3 - Família Mais\n" +
          "4 - Família Super\n" +
          "5 - Solteiro Simples\n" +
          "6 - Solteiro Mais\n" +
          "Digite o número da opção: "
      );

      let acomodacao: Acomodacao;

      switch (tipoAcomodacao) {
        case 1:
          acomodacao = new DiretorCasalSimples().construir();
          break;
        case 2:
          acomodacao = new DiretorFamiliaSimples().construir();
          break;
        case 3:
          acomodacao = new DiretorFamiliaMais().construir();
          break;
        case 4:
          acomodacao = new DiretorFamiliaSuper().construir();
          break;
        case 5:
          acomodacao = new DiretorSolteiroSimples().construir();
          break;
        case 6:
          acomodacao = new DiretorSolteiroMais().construir();
          break;
        default:
          console.log("Opção de acomodação inválida.");
          return;
      }

      let dataEntrada = this.entrada.receberData("Digite a data de entrada:");

      let hospedagem = new Hospedagem(cliente, acomodacao, dataEntrada);
      this.controleHospedagem.adicionarHospedagem(hospedagem);

      console.log("Hospedagem cadastrada com sucesso!");
    } else {
      console.log("Cliente não encontrado.");
    }
  }
}