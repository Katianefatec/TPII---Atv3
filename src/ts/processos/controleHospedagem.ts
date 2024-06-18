import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import Hospedagem from "../modelos/hospedagem";


export default class ControleHospedagem {
  private hospedagens: Hospedagem[] = [];
  private acomodacoesDisponiveis: Acomodacao[] = [];

  public adicionarHospedagem(hospedagem: Hospedagem): void {
    this.hospedagens.push(hospedagem);
  }

  public removerHospedagem(hospedagem: Hospedagem): void {
    const index = this.hospedagens.indexOf(hospedagem);
    if (index !== -1) {
      this.hospedagens.splice(index, 1);
    }
  }

  public getHospedagens(): Hospedagem[] {
    return this.hospedagens;
  }

  public getHospedagemPorCliente(cliente: Cliente): Hospedagem | undefined {
    return this.hospedagens.find((hospedagem) => {
      return hospedagem.Cliente.Nome === cliente.Nome;
    });
  }

  public adicionarAcomodacao(acomodacao: Acomodacao): void {
    this.acomodacoesDisponiveis.push(acomodacao);
}

public listarAcomodacoesDisponiveis(): void {
  if (this.acomodacoesDisponiveis.length === 0) {
    console.log("Nenhuma acomodação disponível.");
    return;
  }

  console.log("Acomodações disponíveis:");
  this.acomodacoesDisponiveis.forEach((acomodacao, index) => {
    console.log(
      `${index + 1} - ${acomodacao.NomeAcomadacao} (Capacidade: ${acomodacao.Capacidade})`
    );
  });
}
public getAcomodacoesDisponiveis(): Acomodacao[] {
  return this.acomodacoesDisponiveis;
}


public removerAcomodacao(acomodacao: Acomodacao): void {
  const index = this.acomodacoesDisponiveis.indexOf(acomodacao);
  if (index !== -1) {
    this.acomodacoesDisponiveis.splice(index, 1);
  }
}
}