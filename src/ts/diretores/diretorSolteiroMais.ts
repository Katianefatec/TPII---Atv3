import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";
import Armazem from "../dominio/armazem";

export default class DiretorSolteiroMais extends Diretor<Acomodacao> {
  constructor() {
    super();
    this.construtor = new ConstrutorAcomodacao();
  }

  public construir(): Acomodacao {
    let objetoConstrutor = this.construtor as ConstrutorAcomodacao;
    objetoConstrutor.NomeAcomodacao = NomeAcomadacao.SolteiroMais;
    objetoConstrutor.CamaCasal = 1;
    objetoConstrutor.CamaSolteiro = 0;
    objetoConstrutor.Climatizacao = true;
    objetoConstrutor.Garagem = 1;
    objetoConstrutor.Suite = 1;
    objetoConstrutor.Capacidade = 2;
    objetoConstrutor.Valor = 100;
    let acomodacao = this.construtor.construir();
    
    Armazem.InstanciaUnica.Acomodacoes.push(acomodacao);

    return acomodacao;
  }
}
