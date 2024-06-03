import Processo from "../abstracoes/processo";
import MenuTipoAtualizaCliente from "../menus/menuTipoAtualizaCliente";
import AtualizarCliente from "./atualizaCliente";
import Cliente from "../modelos/cliente";

export default class TipoAtualizaCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoAtualizaCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                // let nomeCliente = this.entrada.receberTexto('Qual o nome do cliente que deseja atualizar?')
                this.processo = new AtualizarCliente(nomeCliente)
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}