import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import Endereco from "../modelos/endereco";

export default class CadastroClienteDependente extends Processo {
    private titular: Cliente;
    
    constructor(titular: Cliente) { 
        super();
        this.titular = titular;        
    }

    processar(): void {
        console.log("Iniciando o cadastro de um cliente dependente...");
    let nome = this.entrada.receberTexto("Qual o nome do novo dependente?");
    let nomeSocial = this.entrada.receberTexto(
      "Qual o nome social do dependente?"
    );
    let dataNascimento = this.entrada.receberData("Qual a data de nascimento?");
    let cliente = new Cliente(nome, nomeSocial, dataNascimento);
    cliente.Endereco = this.titular.Endereco.clonar();

    this.processo = new CadastrarDocumentosCliente(cliente);
    this.processo.processar();

    this.titular.addDependente(cliente);

    let armazem = Armazem.InstanciaUnica;
    armazem.Clientes.push(cliente);

    console.log("Finalizando o cadastro do cliente...");
  }
}
