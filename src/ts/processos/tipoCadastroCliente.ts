import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente";
import Cliente from "../modelos/cliente";
import CadastroClienteDependente from "./cadastrar/cadastroClienteDependente";
import CadastroClienteTitular from "./cadastrar/cadastroClienteTitular";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            case 2:
                let titular: Cliente;
                let armazem = Armazem.InstanciaUnica; 
                let nomeTitular = this.entrada.receberTexto("Qual o nome do titular?"); 
                titular = armazem.Clientes.find(
                    (cliente) => cliente.Nome === nomeTitular
                  ) as Cliente;
                  if (titular) {
                    this.processo = new CadastroClienteDependente(titular);
                    this.processo.processar();
                  } else {
                    console.log("Titular não encontrado!");
                  }
                  break;
                default:
                  console.log("Opção não entendida :(");
        }
    }
}