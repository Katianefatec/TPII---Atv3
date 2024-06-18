import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";
import Armazem from "../dominio/armazem";
export default class DiretorFamiliaMais extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

  construir(): Acomodacao {
    let objetoConstrutor = this.construtor as ConstrutorAcomodacao
    objetoConstrutor.NomeAcomodacao = NomeAcomadacao.FamiliaMais;
    objetoConstrutor.CamaSolteiro=5;
    objetoConstrutor.CamaCasal=1;
    objetoConstrutor.Suite=2;
    objetoConstrutor.Climatizacao=true;
    objetoConstrutor.Garagem=2;
    objetoConstrutor.Capacidade=9;
    objetoConstrutor.Valor=450.00;
    let acomodacao = this.construtor.construir();    
    
    Armazem.InstanciaUnica.Acomodacoes.push(acomodacao); 

    return acomodacao;
  }
}