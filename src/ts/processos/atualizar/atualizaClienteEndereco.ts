import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";

export default class AtualizarClienteEndereco extends Processo {
  private nomeCliente: string;

  constructor(nomeCliente: string) {
    super();
    this.nomeCliente = nomeCliente;
  }

  processar(): void {
    console.log("Iniciando a atualização do endereço do cliente...");

    let armazem = Armazem.InstanciaUnica;
    let cliente = armazem.Clientes.find(
      (c) => c.Nome === this.nomeCliente
    );

    if (cliente) {
      let rua = this.entrada.receberTexto("Qual a nova rua?");
      let bairro = this.entrada.receberTexto("Qual o novo bairro?");
      let cidade = this.entrada.receberTexto("Qual a nova cidade?");
      let estado = this.entrada.receberTexto("Qual o novo estado?");
      let pais = this.entrada.receberTexto("Qual o novo país?");
      let codigoPostal = this.entrada.receberTexto("Qual o novo código postal?");
      cliente.Endereco = new Endereco(
        rua,
        bairro,
        cidade,
        estado,
        pais,
        codigoPostal
      );
      console.log("Endereço atualizado com sucesso.");
    } else {
      console.log("Cliente não encontrado.");
    }
  }
}