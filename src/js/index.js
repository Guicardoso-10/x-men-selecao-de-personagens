import { selecionarPoderes } from "./functions/selecionar-poderes.js"
import { selecionarPersonalidade } from "./functions/selecionar-personalidade.js"
import { selecionarAparicao } from "./functions/selecionar-aparicao.js"

/*OBJETIVO 1 - Quando passar o mouse em cima de um dos personagens da lista, o personagem deve ser selecionado
passo 1 - pegar os personagens no JS para verificar se o mouse está sobre algum deles*/
const personagens = document.querySelectorAll('.personagem')

//passo 2 - adicionar a classe "selecionado" no personagem que o usuário passar o mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        //um ajuste para casos em que o site é acessado em um smartphone. Quando personagens da parte de baixo da lista forem clicados, a tela irá rolar de forma suave para o topo automaticamente
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
        
        
        //passo 3 - verificar se já existe outro personagem com a classe 'selecionado' e, se sim, remover a classe dele
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        
        
        personagem.classList.add('selecionado')
        /*OBJETIVO 2 -  quando passar o mouse em cima do personagem na lista, trocar a imagem, o nome e as informações do personagem grande*/
        //passo 1 - pegar o elemento do personagem grande para adicionar as informações
        const imagemPersonagemGrande = document.querySelector('.personagem-grande')

        //passo 2 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`

        //passo 3 - alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem')
        nomePersonagem.innerText = personagem.getAttribute('data-name')

        //passo 4 - alterar a descrição dos poderes do personagem grande
        const poderesPersonagem = document.getElementById('poderes')
        poderesPersonagem.innerText = selecionarPoderes(idPersonagem)

        //passo 5 - alterar a descrição da personalidade do personagem grande
        const personalidadePersonagem = document.getElementById('personalidade')
        personalidadePersonagem.innerText = selecionarPersonalidade(idPersonagem)

        //passo 6 - alterar a descrição da primeira aparição nas HQs do personagem grande
        const primeiraAparicao = document.getElementById('aparicao')
        primeiraAparicao.innerText = selecionarAparicao(idPersonagem)
        
    })
})

