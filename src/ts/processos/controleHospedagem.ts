import Cliente from "../modelos/cliente";
import Hospedagem from "../modelos/hospedagem";


export default class ControleHospedagem {
  private hospedagens: Hospedagem[] = [];

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

  // Adicione outros métodos conforme necessário, como:
  // getHospedagemPorAcomodacao()
  // etc.
}