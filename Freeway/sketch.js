function setup() {
    createCanvas(500, 400);
    somTilha.loop();
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoInicialDoCarro()
    verificaColisao()
    exibePontos()
    marcaPonto()
  }
  