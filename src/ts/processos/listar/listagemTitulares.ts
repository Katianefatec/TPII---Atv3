import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemTitulares extends Processo {
  private clientes: Cliente[];
  private impressor!: Impressor;

  constructor() {
    super();
    this.clientes = Armazem.InstanciaUnica.Clientes;
  }

  processar(): void {
    console.clear();
    console.log("Iniciando a listagem dos clientes titulares...");

    this.clientes.forEach((cliente) => {
      if (cliente.Titular === undefined) {
        console.log(`\nTitular: ${cliente.Nome}`);         
        this.impressor = new ImpressaorCliente(cliente);
        console.log(this.impressor.imprimir());

        console.log(`\nDependente do Titular ${cliente.Nome}`);     
        if (cliente.Dependentes.length > 0) {
          cliente.Dependentes.forEach((dependente) => {           
            this.impressor = new ImpressaorCliente(dependente);
            console.log(this.impressor.imprimir());
          });
        } else {
          console.log("Sem dependentes."); 
        }
      }
    });
  }
}