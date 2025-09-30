function desabilitarOpitions(nomeQuestao){
    let options = document.getElementsByName(nomeQuestao);
    options.forEach(option => {
        if (!option.checked){
            option.disabled = true;
        }
    })
}

function playSound(){
    let clickSound = document.getElementById('selecioneSom');
    clickSound.play();
}

function submitQuiz(){
    let respostasCorretas = {
        q1: 'B',
        q2: 'C',
        q3: 'C',
        q4: 'A',
        q5: 'A',
        q6: 'D',
        q7: 'A',
        q8: 'D',
        q9: 'B',
        q10: 'D'
    }

    const form = document.getElementById('quiz-form');
    let score = 0;

    for (key in respostasCorretas){
        let respostaUsuario = form.elements[key].value;
        if (respostaUsuario === respostasCorretas[key]){
            score++;
        }
    }
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Você acertou ${score}/10 perguntas.`

    if(score===10){
        const venceuSom = document.getElementById('venceuSom');
        venceuSom.play();
    } else if (score<=3){
        const melhorarSom = document.getElementById('quaseSom');
        melhorarSom.play();
    } else if (score>=3 && score<=5){
        const quaselaSom = document.getElementById('chegandoSom');
        quaselaSom.play();
    } else{
        const perdeuSom = document.getElementById('perdeuSom');
        perdeuSom.play();
    
    }

    document.getElementById('resetButton').disabled = false;
    document.getElementById('submitQuizId').disabled = true;
}

function resetQuiz(){
    const form = document.getElementById('quiz-form');
    form.reset();

    let options = document.querySelectorAll('input[type = radio]');
    options.forEach(option => {
        option.disabled = false;
    })

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    document.getElementById('submitQuizId').disabled = false;
    document.getElementById('resetButton').disabled = true;
}