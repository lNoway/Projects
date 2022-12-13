


function setup() {
    createCanvas(500, 400);
    somTrilha.loop();
}

function draw() {
    background(imagemDaEstrada);
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    incluiPontos();
    marcaPonto();
    podeSeMover();
    pontosMaiorQueZero()
  
}

