import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class AtualizarClienteNome extends Processo {
    private nomeCliente: string

    constructor(nomeCliente: string) {
        super()
        this.nomeCliente = nomeCliente
    }

    processar(): void {
        console.log('Iniciando a atualização do cliente...')

        let armazem = Armazem.InstanciaUnica
        let cliente = armazem.Clientes.find(c => c.Nome === this.nomeCliente)

        if (cliente) {
            let nome = this.entrada.receberTexto('Qual o novo nome do cliente?')
            let nomeSocial = this.entrada.receberTexto('Qual o novo nome social do cliente?')
            

            cliente.Nome = nome
            cliente.NomeSocial = nomeSocial

            armazem.Clientes.push(cliente)

            console.log('Cliente atualizado com sucesso.')
        } else {
            console.log('Cliente não encontrado.')
        }
    }
}