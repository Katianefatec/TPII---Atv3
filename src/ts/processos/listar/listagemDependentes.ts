import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentes extends Processo {
  private clientes: Cliente[];
  private impressor!: Impressor;

  constructor() {
    super();
    this.clientes = Armazem.InstanciaUnica.Clientes;
  }

  processar(): void {
    console.clear();
    console.log("Iniciando a listagem dos clientes dependentes...");

    let nomeTitular = this.entrada.receberTexto("Digite o nome do titular ");
    console.log("Dependentes:");
    
    let dependentes = this.clientes.filter(
      (cliente) => cliente.Titular?.Nome === nomeTitular
    );
     
    dependentes.forEach((cliente) => {
      this.impressor = new ImpressaorCliente(cliente);
      console.log(this.impressor.imprimir());     
    });
  }
}