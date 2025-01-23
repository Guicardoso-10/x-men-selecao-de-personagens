import { xmen } from "../object.js";

function selecionarAparicao (personagem) {

    let aparicao = ''

    for (let i = 0; i <= 7; i++) {
        if (personagem === xmen[i].nome) {
            aparicao = xmen[i].aparicao
        }
    }

    return aparicao
}

export { selecionarAparicao }