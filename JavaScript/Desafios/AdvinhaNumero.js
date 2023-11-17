let numeroAleatorio = parseInt(Math.random() * 101);
let tentativas = 6;

while(tentativas !== 0){

    tentativas--;
    let chute = prompt('Digite um número de 1 a 100');
    if(chute < numeroAleatorio){

        alert(`O número que estou pensando é maior. Você tem ${tentativas} tentativas restantes.`);
        
    }
    else if(chute > numeroAleatorio){

        alert(`O número que estou pensando é menor. Você tem ${tentativas} tentativas restantes.`);
        
    }
    else{

        alert('Parabéns, você acertou!')
        tentativas = 0;

    };
    if(tentativas == 0 && chute != numeroAleatorio){

        alert(`Uma pena, você não acertou. O número que estava pensando era ${numeroAleatorio}`);
        
    };

};