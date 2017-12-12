/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function jogo() {

//pega o id e muda para a imagem na parte de cima segundo o code table
    document.getElementById("p11").innerHTML = "&#9820";
    document.getElementById("p12").innerHTML = "&#9822;";
    document.getElementById("p13").innerHTML = "&#9821;";
    document.getElementById("p14").innerHTML = "&#9819;";
    document.getElementById("p15").innerHTML = "&#9818;";
    document.getElementById("p16").innerHTML = "&#9821;";
    document.getElementById("p17").innerHTML = "&#9822;";
    document.getElementById("p18").innerHTML = "&#9820;";
    document.getElementById("p21").innerHTML = "&#9823;";
    document.getElementById("p22").innerHTML = "&#9823;";
    document.getElementById("p23").innerHTML = "&#9823;";
    document.getElementById("p24").innerHTML = "&#9823;";
    document.getElementById("p25").innerHTML = "&#9823;";
    document.getElementById("p26").innerHTML = "&#9823;";
    document.getElementById("p27").innerHTML = "&#9823;";
    document.getElementById("p28").innerHTML = "&#9823;";

//pega o id e muda para a imagem na parte de baixo segundo o code table
    document.getElementById("p81").innerHTML = "&#9814;";
    document.getElementById("p82").innerHTML = "&#9816;";
    document.getElementById("p83").innerHTML = "&#9815;";
    document.getElementById("p84").innerHTML = "&#9813;";
    document.getElementById("p85").innerHTML = "&#9812;";
    document.getElementById("p86").innerHTML = "&#9815;";
    document.getElementById("p87").innerHTML = "&#9816;";
    document.getElementById("p88").innerHTML = "&#9814;";
    document.getElementById("p71").innerHTML = "&#9817;";
    document.getElementById("p72").innerHTML = "&#9817;";
    document.getElementById("p73").innerHTML = "&#9817;";
    document.getElementById("p74").innerHTML = "&#9817;";
    document.getElementById("p75").innerHTML = "&#9817;";
    document.getElementById("p76").innerHTML = "&#9817;";
    document.getElementById("p77").innerHTML = "&#9817;";
    document.getElementById("p78").innerHTML = "&#9817;";

}

//cria array que var receber as posicoes do tabuleiro
cria_array();
function cria_array() {
    var x, y;

    peca = new Array();

    for (x = 1; x <= 8; x++) {

        peca[x] = new Array();

        for (y = 1; y <= 8; y++) {

            peca[x][y] = new Array();
            peca[x][y]['peca'] = false; 		//defino como falso para as que não começam com peça ficarem nulas
            peca[x][y]['cor'] = false;			//defino como falso para as que não começam com peça ficarem nulas

        }
    }


    il = new Array();
    il['preto'] = new Array();
    il['branco'] = new Array();

}
//posiciona as pecas pretas no array
peca[1][1]['peca'] = "torre";
peca[1][1]['cor'] = "preto";
peca[1][1]['mov'] = 0;
il['preto']['torre'] = "&#9820;";
peca[1][2]['peca'] = "cavalo";
peca[1][2]['cor'] = "preto";
peca[1][2]['mov'] = 0;
il['preto']['cavalo'] = "&#9822;";
peca[1][3]['peca'] = "bispo";
peca[1][3]['cor'] = "preto";
peca[1][3]['mov'] = 0;
il['preto']['bispo'] = "&#9821;";
peca[1][4]['peca'] = "rainha";
peca[1][4]['cor'] = "preto";
peca[1][4]['mov'] = 0;
il['preto']['rainha'] = "&#9819;";
peca[1][5]['peca'] = "rei";
peca[1][5]['cor'] = "preto";
peca[1][5]['mov'] = 0;
il['preto']['rei'] = "&#9818;";
peca[1][6]['peca'] = "bispo";
peca[1][6]['cor'] = "preto";
peca[1][6]['mov'] = 0;
peca[1][7]['peca'] = "cavalo";
peca[1][7]['cor'] = "preto";
peca[1][7]['mov'] = 0;
peca[1][8]['peca'] = "torre";
peca[1][8]['cor'] = "preto";
peca[1][8]['mov'] = 0;

peca[2][1]['peca'] = "peao";
peca[2][1]['cor'] = "preto";
peca[2][1]['mov'] = 0;
il['preto']['peao'] = "&#9823;";
peca[2][2]['peca'] = "peao";
peca[2][2]['cor'] = "preto";
peca[2][2]['mov'] = 0;
peca[2][3]['peca'] = "peao";
peca[2][3]['cor'] = "preto";
peca[2][3]['mov'] = 0;
peca[2][4]['peca'] = "peao";
peca[2][4]['cor'] = "preto";
peca[2][4]['mov'] = 0;
peca[2][5]['peca'] = "peao";
peca[2][5]['cor'] = "preto";
peca[2][5]['mov'] = 0;
peca[2][6]['peca'] = "peao";
peca[2][6]['cor'] = "preto";
peca[2][6]['mov'] = 0;
peca[2][7]['peca'] = "peao";
peca[2][7]['cor'] = "preto";
peca[2][7]['mov'] = 0;
peca[2][8]['peca'] = "peao";
peca[2][8]['cor'] = "preto";
peca[2][8]['mov'] = 0;

//posiciona as pecas brancas no array	
peca[8][1]['peca'] = "torre";
peca[8][1]['cor'] = "branco";
peca[8][1]['mov'] = 0;
il['branco']['torre'] = "&#9814;";
peca[8][2]['peca'] = "cavalo";
peca[8][2]['cor'] = "branco";
peca[8][2]['mov'] = 0;
il['branco']['cavalo'] = "&#9816;";
peca[8][3]['peca'] = "bispo";
peca[8][3]['cor'] = "branco";
peca[8][3]['mov'] = 0;
il['branco']['bispo'] = "&#9815;";
peca[8][4]['peca'] = "rainha";
peca[8][4]['cor'] = "branco";
peca[8][4]['mov'] = 0;
il['branco']['rainha'] = "&#9813;";
peca[8][5]['peca'] = "rei";
peca[8][5]['cor'] = "branco";
peca[8][5]['mov'] = 0;
il['branco']['rei'] = "&#9812;";
peca[8][6]['peca'] = "bispo";
peca[8][6]['cor'] = "branco";
peca[8][6]['mov'] = 0;
peca[8][7]['peca'] = "cavalo";
peca[8][7]['cor'] = "branco";
peca[8][7]['mov'] = 0;
peca[8][8]['peca'] = "torre";
peca[8][8]['cor'] = "branco";
peca[8][8]['mov'] = 0;

peca[7][1]['peca'] = "peao";
peca[7][1]['cor'] = "branco";
peca[7][1]['mov'] = 0;
il['branco']['peao'] = "&#9817;";
peca[7][2]['peca'] = "peao";
peca[7][2]['cor'] = "branco";
peca[7][2]['mov'] = 0;
peca[7][3]['peca'] = "peao";
peca[7][3]['cor'] = "branco";
peca[7][3]['mov'] = 0;
peca[7][4]['peca'] = "peao";
peca[7][4]['cor'] = "branco";
peca[7][4]['mov'] = 0;
peca[7][5]['peca'] = "peao";
peca[7][5]['cor'] = "branco";
peca[7][5]['mov'] = 0;
peca[7][6]['peca'] = "peao";
peca[7][6]['cor'] = "branco";
peca[7][6]['mov'] = 0;
peca[7][7]['peca'] = "peao";
peca[7][7]['cor'] = "branco";
peca[7][7]['mov'] = 0;
peca[7][8]['peca'] = "peao";
peca[7][8]['cor'] = "branco";
peca[7][8]['mov'] = 0;

