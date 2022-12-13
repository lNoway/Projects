let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0

function movimentaAtor(){
  if(keyIsDown(87)){
    yAtor -= 3
  }
  if(keyIsDown(83)){
    yAtor += 3
  }
    if(keyIsDown(65)){
    xAtor -= 3
  }
  if(keyIsDown(68)){
    xAtor += 3
  }
}


function mostraAtor(){
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somColidiu.play();
      if (meusPontos > 0){
        meusPontos -=1;
    }
        }
    }
  
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function colidiu(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
    somPontos.play();
  }
}

function pontosMaiorQueZero(){
    return meusPontos > 0;
}  

function podeSeMover(){
    return yAtor < 366;
}

function pontosMaiorQueZero(){
    return meusPontos > 0;
}    