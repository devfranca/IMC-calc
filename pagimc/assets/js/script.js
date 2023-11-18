//reset do form
const form = document.querySelector('.formulario');

const eventoForm = (evento) => {
    evento.preventDefault()
    const inputPeso = document.querySelector('.peso');
    const inputaAltura = document.querySelector('.altura');
    const resultado = document.querySelector('.resultado');

    const peso = Number(inputPeso.value);
    const altura = Number(inputaAltura.value);
    const imc = (peso / (altura * altura));

    if (isNaN(peso) || isNaN(altura)) {
        alert('Digite numeros validos')
    };

    if (imc > 39.9) {
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}, Obesidade 3 (mórbida)`;
        resultado.style.backgroundColor = 'red';
    }else if (imc >= 35 && imc <= 39.9) {
    resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}, Obesidade 2 (severa)</p>`;
    resultado.style.backgroundColor = 'orange';
} else if (imc >= 30 && imc <= 34.9) {
    resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}, Obesidade 1</p>`;
    resultado.style.backgroundColor = 'yellow';
    resultado.style.color = 'black';
} else if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}, Levemente acima do peso</p>`;
    resultado.style.backgroundColor = 'green';
} else if (imc >= 18.6 && imc <= 24.9) {
    resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)},  Peso ideal (Parabéns)</p>`;
    resultado.style.backgroundColor = 'blue';
} else if (imc < 18.6) {
    resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}, Abaixo do peso</p>`;
    resultado.style.backgroundColor = 'brown';
}
    
};
form.addEventListener('submit', eventoForm);






