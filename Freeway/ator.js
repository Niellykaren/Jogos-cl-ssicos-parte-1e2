let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
  }

  function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      if(podeMover()){
      yAtor += 3;
    }}
  }

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaPosicaoInicial();
      somColisao.play();
      if (pontosMaiorZero()){
          meusPontos -=1;
    }
  }
  }
}

function voltaPosicaoInicial(){
  yAtor = 366;
}

function exibePontos(){
  textAlign(CENTER)
  textSize(25)
  fill(255, 20, 147)
  text(meusPontos,width/5,27);
}

function marcaPonto(){
  if (yAtor<15){
    meusPontos+=1;
    somPontos.play();
    voltaPosicaoInicial();
  }}
  
  function pontosMaiorZero(){
      return meusPontos>0;
  }
  function podeMover(){
  return yAtor<366;
  }
    