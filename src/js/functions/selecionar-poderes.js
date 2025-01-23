import { xmen } from "../object.js"

function selecionarPoderes(personagem) {
    
    let poderes = ''
    
    for (let i = 0; i <= 7; i++) {
        if (personagem === xmen[i].nome) {
            poderes = xmen[i].poderes
        }
    }

    return poderes
}

export { selecionarPoderes }