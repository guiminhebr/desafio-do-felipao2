function SaldoDeVitorias(vitorias, derrotas){
    const saldo = vitorias-derrotas
    return saldo
  }
  //SaldoDeVitorias retorna a diferença entre vitorias e derrotas
 function RankPorVitoria(vitorias){
   let rank = ""
    if (vitorias <= 10){
       rank = "Ferro"
    }
    else if (vitorias <= 20 ){
      rank = "Bronze"
    }
    else if (vitorias <= 50 ){
      rank = "Prata"
    }
    else if (vitorias <= 80 ){
      rank = "Ouro"
    }
    else if (vitorias <= 90 ){
      rank = "Diamante"
    }
    else if (vitorias <= 100 ){
      rank = "Lendário"
    }
    else {
      rank = "Imortal"
    }
    return rank
 }
 //com base no numero de vitorias, retorna o rank que o jogador se encontra
 
 
 
 let VencidasPeloJogador = 20
 let PerdidasPeloJogador = 12
 const SaldoVitorias  = SaldoDeVitorias(VencidasPeloJogador, PerdidasPeloJogador) // saldo 8
 const nivel = RankPorVitoria(VencidasPeloJogador) // nivel ferro
 // SaldoVitorias recebe a função SaldoDeVitorias com os parametros do jogador 
 //nivel recebe a função RankPorVitoria com o parametro de quantas partidas foram vencidas pelo jogador
 console.log("O heroi tem de saldo de " + SaldoVitorias + " e está no nível de "+ nivel)
 
 
 
 