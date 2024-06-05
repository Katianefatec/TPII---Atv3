import Cliente from "../modelos/cliente";
import Acomodacao from "../modelos/acomodacao";

export default class Hospedagem {
  private cliente: Cliente;
  private acomodacao: Acomodacao;
  private dataEntrada: Date;
  private dataSaida?: Date;

  constructor(
    cliente: Cliente,
    acomodacao: Acomodacao,
    dataEntrada: Date
  ) {
    this.cliente = cliente;
    this.acomodacao = acomodacao;
    this.dataEntrada = dataEntrada;
  }

  public get Cliente(): Cliente {
    return this.cliente;
  }

  public get Acomodacao(): Acomodacao {
    return this.acomodacao;
  }

  public get DataEntrada(): Date {
    return this.dataEntrada;
  }

  public get DataSaida(): Date | undefined {
    return this.dataSaida;
  }

  public setDataSaida(dataSaida: Date): void {
    this.dataSaida = dataSaida;
  }
}