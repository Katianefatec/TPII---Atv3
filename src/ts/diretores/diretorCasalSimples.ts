import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";
import Armazem from "../dominio/armazem";

export default class DiretorCasalSimples extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

  public construir(): Acomodacao {
    let objetoConstrutor = this.construtor as ConstrutorAcomodacao
    objetoConstrutor.NomeAcomodacao = NomeAcomadacao.CasalSimples    
    objetoConstrutor.CamaSolteiro=0;
    objetoConstrutor.CamaCasal=1;
    objetoConstrutor.Suite=1;
    objetoConstrutor.Climatizacao = true
    objetoConstrutor.Garagem=1;
    objetoConstrutor.Capacidade=4;
    objetoConstrutor.Valor = 150;
    let acomodacao = this.construtor.construir();
    
    Armazem.InstanciaUnica.Acomodacoes.push(acomodacao); 

    return acomodacao;
    
  }
}