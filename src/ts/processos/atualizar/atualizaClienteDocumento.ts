import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";

export default class AtualizarClienteDocumento extends Processo {
  private nomeCliente: string;

  constructor(nomeCliente: string) {
    super();
    this.nomeCliente = nomeCliente;
  }

  processar(): void {
    console.log("Iniciando a atualização do documento do cliente...");

    let armazem = Armazem.InstanciaUnica;
    let cliente = armazem.Clientes.find(
      (c) => c.Nome === this.nomeCliente
    );

    if (cliente) {
      let numero = this.entrada.receberTexto("Qual o novo número do documento?");
      let tipoDocumento = this.entrada.receberNumero(
        "Qual o tipo do documento? (1 - CPF, 2 - RG, 3 - CNH)"
      );
      let dataExpedicao = this.entrada.receberData(
        "Qual a nova data de expedição?"
      );
     
      switch (tipoDocumento) {
        case 1:
          cliente.Documentos.push(
            new Documento(numero, TipoDocumento.CPF, dataExpedicao)
          );
          break;
        case 2:
          cliente.Documentos.push(
            new Documento(numero, TipoDocumento.RG, dataExpedicao)
          );
          break;
        case 3:
          cliente.Documentos.push(
            new Documento(numero, TipoDocumento.Passaporte, dataExpedicao)
          );
          break;
        default:
          console.log("Opção de tipo de documento inválida.");
      }

      console.log("Documento atualizado com sucesso.");
    } else {
      console.log("Cliente não encontrado.");
    }
  }
}