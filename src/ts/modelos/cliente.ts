import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private titular!: Cliente

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
        this.telefones = []
    }

    public get Nome() { return this.nome }
    public set Nome(novoNome: string) { this.nome = novoNome }

    public get NomeSocial() { return this.nomeSocial }
    public set NomeSocial(novoNomeSocial: string) { this.nomeSocial = novoNomeSocial }

    public get DataNascimento() { return this.dataNascimento }
    public set DataNascimento(novaDataNascimento: Date) { this.dataNascimento = novaDataNascimento }

    public get DataCadastro() { return this.dataCadastro }
    public set DataCadastro(novaDataCadastro: Date) { this.dataCadastro = novaDataCadastro }    

    public get Telefones() { return this.telefones }
    public set Telefones(novosTelefones: Telefone[]) { this.telefones = novosTelefones }
    
    public get Endereco() { return this.endereco }    
    public set Endereco(endereco: Endereco) { this.endereco = endereco }

    public get Documentos() { return this.documentos }
    public get Dependentes() { return this.dependentes }
    public get Titular() { return this.titular }

    public addDependente(dependente: Cliente): void {
        this.dependentes.push(dependente);
        dependente.titular = this;
      }

    public removerDependente(dependente: Cliente): void {
    const index = this.dependentes.indexOf(dependente);
        if (index !== -1) {
            this.dependentes.splice(index, 1);
        }
    }
}


    
