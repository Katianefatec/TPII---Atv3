import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";
import Armazem from "../dominio/armazem";

export default class DiretorFamiliaSimples extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }


  construir(): Acomodacao {
    let objetoConstrutor = this.construtor as ConstrutorAcomodacao  
    objetoConstrutor.NomeAcomodacao = NomeAcomadacao.FamilaSimples;  
    objetoConstrutor.CamaSolteiro=2;
    objetoConstrutor.CamaCasal=1;
    objetoConstrutor.Suite=1;
    objetoConstrutor.Climatizacao=true;
    objetoConstrutor.Garagem=1;
    objetoConstrutor.Capacidade=6;
    objetoConstrutor.Valor=300.00;
    let acomodacao = this.construtor.construir();

    Armazem.InstanciaUnica.Acomodacoes.push(acomodacao); 

    return acomodacao;
  }
}