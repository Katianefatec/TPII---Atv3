import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class AtualizarClienteTelefone extends Processo {
  private nomeCliente: string;

  constructor(nomeCliente: string) {
    super();
    this.nomeCliente = nomeCliente;
  }

  processar(): void {
    console.log("Iniciando a atualização do telefone do cliente...");

    let armazem = Armazem.InstanciaUnica;
    let cliente = armazem.Clientes.find(
      (c) => c.Nome === this.nomeCliente
    );

    if (cliente) {
      let ddd = this.entrada.receberTexto("Qual o novo DDD?");
      let numero = this.entrada.receberTexto("Qual o novo número?");
      cliente.Telefones.push(new Telefone(ddd, numero));
      console.log("Telefone atualizado com sucesso.");
    } else {
      console.log("Cliente não encontrado.");
    }
  }
}