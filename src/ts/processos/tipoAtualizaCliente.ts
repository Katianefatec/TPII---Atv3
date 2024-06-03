import Processo from "../abstracoes/processo";
import MenuTipoAtualizaCliente from "../menus/menuTipoAtualizaCliente";
import AtualizarClienteNome from "./atualizaClienteNome";
// import AtualizarClienteDataNascimento from "./atualizaClienteDataNascimento";
// import AtualizarClienteTipo from "./atualizaClienteTipo";
// import AtualizarDocumento from "./atualizaClienteDocumento";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";

export default class TipoAtualizaCliente extends Processo {
  constructor() {
    super();
    this.menu = new MenuTipoAtualizaCliente();
  }
  processar(): void {
    this.menu.mostrar();
    this.opcao = this.entrada.receberNumero("Qual opção desejada?");

    switch (this.opcao) {
      case 1:
        let nomeCliente = this.entrada.receberTexto(
          "Qual o nome do cliente que deseja atualizar?"
        );
        this.processo = new AtualizarClienteNome(nomeCliente);
        this.processo.processar();
        break;
      // case 2:
      //   let dataNascimentoCliente = this.entrada.receberTexto(
      //     "Qual a data de nascimento do cliente que deseja atualizar?"
      //   );
      //   this.processo = new AtualizarClienteDataNascimento(
      //     dataNascimentoCliente
      //   );
      //   this.processo.processar();
      //   break;
      // case 3:
      //   let tipoCliente = this.entrada.receberTexto(
      //     "Qual o tipo do cliente que deseja atualizar?"
      //   );
      //   this.processo = new AtualizarClienteTipo(tipoCliente);
      //   this.processo.processar();
      //   break;
      // case 4:
      //   let documentoCliente = this.entrada.receberTexto(
      //     "Qual o número do documento do cliente que deseja atualizar?"
      //   );
      //   let tipoDocumento = this.entrada.receberNumero(
      //     "Qual o tipo do documento? (1 - CPF, 2 - RG, 3 - CNH)"
      //   );
      //   new AtualizarDocumento(
      //     documentoCliente,
      //     TipoDocumento[tipoDocumento - 1]
      //   ).processar();
      //   break;
      default:
        console.log("Opção inválida. Por favor, selecione uma opção válida.");
        break;
    }
  }
}
