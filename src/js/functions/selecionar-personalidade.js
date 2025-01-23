import { xmen } from "../object.js";

function selecionarPersonalidade (personagem) {
    let personalidade = ''

    for (let i = 0; i <= 7; i++) {
        if (personagem === xmen[i].nome) {
            personalidade = xmen[i].personalidade
        }
    }

    return personalidade
}

export { selecionarPersonalidade }