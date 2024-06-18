import Processo from "../abstracoes/processo"
import DiretorCasalSimples from "../diretores/diretorCasalSimples"
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais"
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples"
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper"
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais"
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples"
import Armazem from "../dominio/armazem"
import MenuPrincipal from "../menus/menuPricipal"
import CadastroHospedagem from "./cadastrar/cadastroHospedagem"
import ControleHospedagem from "./controleHospedagem"
import ExcluirCliente from "./excluircliente"
import ListagemAcomodacoes from "./listar/listagemAcomodacoes"
import TipoAtualizaCliente from "./tipoAtualizaCliente"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoListagemClientes from "./tipoListagemClientes"

export default class Principal extends Processo {
    private controleHospedagem: ControleHospedagem;
  
    constructor() {
      super();
      this.execucao = true;
      this.menu = new MenuPrincipal();
      this.controleHospedagem = new ControleHospedagem();
  
      const casalSimples = new DiretorCasalSimples().construir();
      const familiaSimples = new DiretorFamiliaSimples().construir();
      const familiaMais = new DiretorFamiliaMais().construir();
      const familiaSuper = new DiretorFamiliaSuper().construir();
      const solteiroSimples = new DiretorSolteiroSimples().construir();
      const solteiroMais = new DiretorSolteiroMais().construir();
  
      Armazem.InstanciaUnica.Acomodacoes = [
        casalSimples,
        familiaSimples,
        familiaMais,
        familiaSuper,
        solteiroSimples,
        solteiroMais,
      ];
  
      
      [
        casalSimples,
        familiaSimples,
        familiaMais,
        familiaSuper,
        solteiroSimples,
        solteiroMais,
      ].forEach((acomodacao) => {
        this.controleHospedagem.adicionarAcomodacao(acomodacao); 
      });
  
      this.menu = new MenuPrincipal();
    }

    
    processar(): void {
        while (this.execucao) {
            this.menu.mostrar()        
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (this.opcao) {
                case 1:
                    this.processo = new TipoCadastroCliente()
                    this.processo.processar()
                    break
                case 2:
                    this.processo = new TipoAtualizaCliente()
                    this.processo.processar()
                    break
                case 3:
                    this.processo = new TipoListagemClientes()
                    this.processo.processar()
                    break
                case 4: 
                    let nomeCliente = this.entrada.receberTexto("Digite o nome do cliente a ser excluído:");
                    this.processo = new ExcluirCliente(nomeCliente)
                    this.processo.processar()
                    break
                case 5:
                    this.processo = new ListagemAcomodacoes(this.controleHospedagem); 
                        this.processo.processar();
                        break;
                case 6:
                    this.processo = new CadastroHospedagem(this.controleHospedagem); 
                    this.processo.processar();
                    break;

                case 0:
                    this.execucao = false
                    console.log('Até logo!')
                    console.clear()
                    break
                default:
                    console.log('Opção não entendida :(')
            }
        }
    }
}