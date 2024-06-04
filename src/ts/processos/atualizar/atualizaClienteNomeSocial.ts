import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class AtualizarClienteNomeSocial extends Processo {
  private nomeCliente: string;

  constructor(nomeCliente: string) {
    super();
    this.nomeCliente = nomeCliente;
  }

  processar(): void {
    console.log("Iniciando a atualização do nome social do cliente...");

    let armazem = Armazem.InstanciaUnica;
    let cliente = armazem.Clientes.find(
      (c) => c.Nome === this.nomeCliente
    );

    if (cliente) {
      let novoNomeSocial = this.entrada.receberTexto(
        "Qual o novo nome social do cliente?"
      );
      cliente.NomeSocial = novoNomeSocial;
      console.log("Nome social atualizado com sucesso.");
    } else {
      console.log("Cliente não encontrado.");
    }
  }
}