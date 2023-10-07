class gerericaHeroi{
constructor(nome, idade, tipo){
this.nome=nome
this.idade=idade
this.tipo =tipo
}
atacar(ataque){
    console.log("O jogador "+""+this.nome+" "+this.idade+" anos do tipo "+this.tipo+" atacou usando "+ataque)
}
}
let jogador = new gerericaHeroi("Fox",23,"mago")
let jogador1 = new gerericaHeroi("FireD",20,"guerreiro")

if(jogador.tipo ==="guerreiro"){
    jogador.atacar("espada")
}else if(jogador.tipo==="mago"){
    jogador.atacar("magia")
}else if(jogador.tipo==="lutador"){
    jogador.atacar("artes marciais")
}
else if(jogador.tipo==="assasino"){
    jogador.atacar("facas")
}
if(jogador1.tipo ==="guerreiro"){
    jogador1.atacar("espada")
}else if(jogador1.tipo==="mago"){
    jogador1.atacar("magia")
}else if(jogador1.tipo==="lutador"){
    jogador1.atacar("artes marciais")
}
else if(jogador1.tipo==="assasino"){
    jogador.atacar("facas")
}

