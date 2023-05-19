/*
    O que precisamos fazer? -> Quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - Objetivo 1 -> quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - Passo 1 -> pegar no JS o elemento HTML correspondente ao botão de troca de tema, para saber que o usuário clicou no botão
        - Passo 2 -> dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - Passo 3 -> dar um jeito de identificar o clique do usuário no botão de troca de tema
        - Passo 4 -> adicionar a classe modo-escuro no body
        - Passo 5 -> trocar a imagem do botão de alterar tema pra lua
    
    - Objetivo 2 -> quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - Passo 6 -> verificar se o body já tem a classe modo-escuro
        - Passo 7 -> remover a classe do modo-escuro do body
        - Passo 8 -> trocar a imagem do botão de alterar tema pra sol
*/

// Passo 1 
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// Passo 2 
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// Passo 3 
botaoAlterarTema.addEventListener("click", () => {

    // Passo 6
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    // Toggle para alternar entre dois estados
    // Passo 4 + Passo 7
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {

        // Passo 8 
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    }

    else {

        // Passo 5
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }

});




