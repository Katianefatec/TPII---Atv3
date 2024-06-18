import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";
import Armazem from "../dominio/armazem";

export default class DiretorFamiliaSuper extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }


  construir(): Acomodacao {
    let objetoConstrutor = this.construtor as ConstrutorAcomodacao
    objetoConstrutor.NomeAcomodacao = NomeAcomadacao.FamiliaSuper;    
    objetoConstrutor.CamaSolteiro=6;
    objetoConstrutor.CamaCasal=2;
    objetoConstrutor.Suite=3;
    objetoConstrutor.Climatizacao=true;
    objetoConstrutor.Garagem=2;
    objetoConstrutor.Capacidade=14;
    objetoConstrutor.Valor=600.00;
    let acomodacao = this.construtor.construir();
    
    Armazem.InstanciaUnica.Acomodacoes.push(acomodacao); 

    return acomodacao;
  }
}