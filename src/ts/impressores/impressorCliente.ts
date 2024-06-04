import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";
import ImpressorTelefone from "./impressorTelefone";

export default class ImpressaorCliente implements Impressor {
  private cliente: Cliente;
  private impressor!: Impressor;

  constructor(cliente: Cliente) {
    this.cliente = cliente;
  }

  imprimir(): string {
    let impressao = `\n` +
      `| Nome: ${this.cliente.Nome}\n` +
      `| Nome social: ${this.cliente.NomeSocial}\n` +
      `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n` +
      `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`;

    this.impressor = new ImpressorEndereco(this.cliente.Endereco);
    impressao += `\n${this.impressor.imprimir()}`;

    this.impressor = new ImpressorDocumentos(this.cliente.Documentos);
    impressao += `\n${this.impressor.imprimir()}`;

    if (this.cliente.Telefones.length > 0) {
      impressao += `\nTelefones:`;
      this.cliente.Telefones.forEach((telefone) => {
        this.impressor = new ImpressorTelefone(telefone); 
        impressao += `\n${this.impressor.imprimir()}`; 
      });
    }

    if (this.cliente.Dependentes.length > 0) {
      impressao += `\nDependentes:`;
      this.cliente.Dependentes.forEach((dependente) => {
        impressao += `\n${dependente.Nome}`;
      });
    } 


    impressao += `\n****************************`;
    return impressao;
  }
}