import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";
import Armazem from "../dominio/armazem";

export default class DiretorSolteiroSimples extends Diretor<Acomodacao> {
  constructor() {
    super();
    this.construtor = new ConstrutorAcomodacao();
  }

  public construir(): Acomodacao {
    let objetoConstrutor = this.construtor as ConstrutorAcomodacao;
    objetoConstrutor.NomeAcomodacao = NomeAcomadacao.SolteiroSimples;
    objetoConstrutor.CamaCasal = 0;
    objetoConstrutor.CamaSolteiro = 1;
    objetoConstrutor.Climatizacao = true;
    objetoConstrutor.Garagem = 0;
    objetoConstrutor.Suite = 1;
    objetoConstrutor.Capacidade = 1;
    objetoConstrutor.Valor = 50;
    let acomodacao = this.construtor.construir();

    Armazem.InstanciaUnica.Acomodacoes.push(acomodacao);

    return acomodacao;
  }
}
