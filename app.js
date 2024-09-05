alert("Bem-Vindo ao Jogo Do Número Secreto!");
let maiorNumero = 10
let nome = prompt("Insira seu Nickname: ");
let nuemroSecreto = Math.floor(Math.random() * maiorNumero + 1);
let vidas = 5;
let chuteDaPessoa;
let tentativas = 0;
let derrota = 5;
let roud = 1;
console.log("Ei o numero secreto e " + nuemroSecreto + "!🤐");
//Confirmação De Acerto


while(vidas != 0){
    console.log("- Roud: " + roud)
    roud++
    chuteDaPessoa = (prompt("Escolha um número entre 1 e " + maiorNumero));
    tentativas++
    derrota--
    console.log("Tentavia: " + tentativas)
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        if (nuemroSecreto == chuteDaPessoa) {
            console.log("Chute Da Pessoa: " + chuteDaPessoa);
            alert("Parabens " + nome + "," + " Você Acertou! " + "O numero era: " + nuemroSecreto + ". Você acertou em: " + tentativas + " " +palavraTentativa);
            vidas = 0;
            break;
        } 

        else {
            vidas--
            let maiorOuMenor = nuemroSecreto > chuteDaPessoa ? "maior" : "menor"
            alert(nome + " você tem so: " + vidas + " vidas e o numero secreto e " + maiorOuMenor + " que o seu chute (" + chuteDaPessoa + ")");
            console.log("Vidas Restantes: " + vidas);
            console.log("Chute Da Pessoa: " + chuteDaPessoa);
        }

        if(derrota == 0){
            alert("Sua vida zerou, você Perdeu")
            break;
        }
}
alert("O numero secreto era: " + nuemroSecreto)
console.log("- Fim De Jogo")