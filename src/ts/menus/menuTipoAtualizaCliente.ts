import Menu from "../interfaces/menu";

export default class MenuTipoAtualizaCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de atualização para o cliente? `)
        console.log(`----------------------`)
        console.log(`| 1 - Atualizar nome`)
        console.log(`| 2 - Atualizar nome social`)
        console.log(`| 3 - Atualizar data de nascimento`)
        console.log(`----------------------`)
    }
}