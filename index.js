const buttons = document.querySelectorAll('.drum');

function playSound(letra) {
    switch(letra) { // para todas as hipóteses de letra
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3'); // constructor Audio()
            break;        
    }
    audio.play(); // para executar o áudio adicionado pelo constructor
}

buttons.forEach( button => {
    button.addEventListener("click", e => { // recebe o evento que está à espera e o callback que é executado quando o evento é executado
        // console.log(e.target.innerText);
        // console.log(this); // o contexto do this é o window, por ser uma função arrow (se fosse uma função anónima já não era)

        var buttonPressed = e.target.innerText; // variável assume o valor da letra em cada botão
        playSound(buttonPressed); // executa a função no evento.target.innerText (a letra que foi carregada)
        buttonAnimation(buttonPressed);
    });
});

function buttonAnimation(letra) {
    const activeButton = document.querySelector('.'+letra);
    activeButton.classList.add('pressed');
    setTimeout( () => {
        activeButton.classList.remove('pressed');
    },100);
}

document.addEventListener('keydown', e => {
    console.log(e.key); // retorna a letra carregada com o teclado
    playSound(e.key);
    buttonAnimation(e.key);
});