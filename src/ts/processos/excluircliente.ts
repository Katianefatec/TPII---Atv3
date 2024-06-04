import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class ExcluirCliente extends Processo {
  private nomeCliente: string;

  constructor(nomeCliente: string) {
    super();
    this.nomeCliente = nomeCliente;
  }

  processar(): void {
    console.log("Iniciando a exclusão do cliente...");

    let armazem = Armazem.InstanciaUnica;
    let cliente = armazem.Clientes.find((c) => c.Nome === this.nomeCliente);

    if (cliente) {
      
      if (cliente.Titular === undefined) {
       
        cliente.Dependentes.forEach((dependente) => {
          armazem.Clientes.splice(
            armazem.Clientes.indexOf(dependente),
            1
          );
        });
      }

      
      armazem.Clientes.splice(armazem.Clientes.indexOf(cliente), 1);

      console.log("Cliente excluído com sucesso.");
    } else {
      console.log("Cliente não encontrado.");
    }
  }
}