import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class AtualizarClienteDataNascimento extends Processo {
  private nomeCliente: string;

  constructor(nomeCliente: string) {
    super();
    this.nomeCliente = nomeCliente;
  }

  processar(): void {
    console.log(
      "Iniciando a atualização da data de nascimento do cliente..."
    );

    let armazem = Armazem.InstanciaUnica;
    let cliente = armazem.Clientes.find(
      (c) => c.Nome === this.nomeCliente
    );

    if (cliente) {
      let novaDataNascimento = this.entrada.receberData(
        "Qual a nova data de nascimento do cliente?"
      );
      cliente.DataNascimento = novaDataNascimento;
      console.log("Data de nascimento atualizada com sucesso.");
    } else {
      console.log("Cliente não encontrado.");
    }
  }
}