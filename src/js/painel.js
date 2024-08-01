/* Quando na seta para avançar temos que esconder todas as  imagens e mostrar a próxima imagem. 
    
    - A imagem atual começa em 0 pq é a primeira imagem
    - Assim que for clicado no avançar eu preciso adicionar mais 1 no contador de imagens
    - Pra poder saber que agora eu vou mostrar a segunda imagem
    
    - Esconder todas as imagens
        - Pegar todas as imagens usando o DOM e remover a classe mostrar
    - Mostrar a próxima imagem
        - Pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

function esconderImagem() {
  imagensPainel.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });
}

function mostrarImagem() {
  imagensPainel[imagemAtual].classList.add("mostrar");
}

/*
    Quando na seta para avançar temos que esconder todas as  imagens e mostrar a próxima imagem.
*/

setaAvancar.addEventListener("click", function () {
  //testa se o contador da imagemAtual é igual ao total de imagens
  const totalDeImagens = imagensPainel.length - 1;
  if (imagemAtual === totalDeImagens) {
    return;
  }

  /*
        - A imagem atual começa em 0 pq é a primeira imagem
        - Assim que for clicado no avançar eu preciso adicionar mais 1 no contador de imagens
        - Pra poder saber que agora eu vou mostrar a segunda imagem
    */

  imagemAtual++;

  /*
        - Esconder todas as imagens
        - Pegar todas as imagens usando o DOM e remover a classe mostrar
    */

  esconderImagem();

  /*
        - Mostrar a próxima imagem
        - Pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela
    */

  mostrarImagem();
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;

  esconderImagem();

  mostrarImagem();
});
