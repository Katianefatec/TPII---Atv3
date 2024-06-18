import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";

export default class Acomodacao {
  private nomeAcomadacao: NomeAcomadacao;
  private camaSolteiro: number;
  private camaCasal: number;
  private suite: number;
  private climatizacao: boolean;
  private garagem: number;
  private capacidade: number;
  private valor: number;
  

  constructor(
    nomeAcomadacao: NomeAcomadacao,
    camaSolteiro: number,
    camaCasal: number,
    suite: number,
    climatizacao: boolean,
    garagem: number,
    capacidade: number,
    valor: number
  ) {
    this.nomeAcomadacao = nomeAcomadacao;
    this.camaSolteiro = camaSolteiro;
    this.camaCasal = camaCasal;
    this.suite = suite;
    this.climatizacao = climatizacao;
    this.garagem = garagem;
    this.capacidade = capacidade;
    this.valor = valor;
  }

  public get NomeAcomadacao() {
    return this.nomeAcomadacao;
  }
  public get CamaSolteiro() {
    return this.camaSolteiro;
  }
  public get CamaCasal() {
    return this.camaCasal;
  }
  public get Suite() {
    return this.suite;
  }
  public get Climatizacao() {
    return this.climatizacao;
  }
  public get Garagem() {
    return this.garagem;
  }

  public get Capacidade() {
    return this.capacidade;
  }

  public get Valor() {
    return this.valor;
  }
}
