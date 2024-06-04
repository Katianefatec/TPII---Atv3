import Processo from "../abstracoes/processo";
import MenuTipoAtualizaCliente from "../menus/menuTipoAtualizaCliente";
import AtualizarClienteDataNascimento from "./atualizar/atualizaClienteDataNascimento";
import AtualizarClienteDocumento from "./atualizar/atualizaClienteDocumento";
import AtualizarClienteEndereco from "./atualizar/atualizaClienteEndereco";
import AtualizarClienteNome from "./atualizar/atualizaClienteNome";
import AtualizarClienteNomeSocial from "./atualizar/atualizaClienteNomeSocial";
import AtualizarClienteTelefone from "./atualizar/atualizaClienteTelefone";

export default class TipoAtualizaCliente extends Processo {
  constructor() {
    super();
    this.menu = new MenuTipoAtualizaCliente();
  }
  processar(): void {
    this.menu.mostrar();
    this.opcao = this.entrada.receberNumero("Qual opção desejada?");
    let nomeCliente: string;

    switch (this.opcao) {
      case 1:
        nomeCliente = this.entrada.receberTexto(
          "Qual o nome do cliente que deseja atualizar?"
        );
        this.processo = new AtualizarClienteNome(nomeCliente);
        this.processo.processar();
        break;
        case 2:
          nomeCliente = this.entrada.receberTexto(
            "Qual o nome do cliente que deseja atualizar?"
          );
          this.processo = new AtualizarClienteNomeSocial(nomeCliente);
          this.processo.processar();
          break;
        case 3:
          nomeCliente = this.entrada.receberTexto(
            "Qual o nome do cliente que deseja atualizar?"
          );
          this.processo = new AtualizarClienteDataNascimento(nomeCliente);
          this.processo.processar();
          break;
        case 4:
          nomeCliente = this.entrada.receberTexto(
            "Qual o nome do cliente que deseja atualizar?"
          );
          this.processo = new AtualizarClienteEndereco(nomeCliente);
          this.processo.processar();
          break;
        case 5:
          nomeCliente = this.entrada.receberTexto(
            "Qual o nome do cliente que deseja atualizar?"
          );
          this.processo = new AtualizarClienteTelefone(nomeCliente);
          this.processo.processar();
          break;
        case 6:
          nomeCliente = this.entrada.receberTexto(
            "Qual o nome do cliente que deseja atualizar?"
          );
          this.processo = new AtualizarClienteDocumento(nomeCliente);
          this.processo.processar();
          break;
        default:
          console.log("Opção inválida. Por favor, selecione uma opção válida.");
          break;
      }
    }
}
