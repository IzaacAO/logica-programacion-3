const prompt = require('prompt-sync')();

const numero = Number(prompt('Digita el número para calcular su factorial: '));

if (numero >= 0) {
    let factorial = 1;
    let operacion = '';

    for (let i = numero; i >= 1; i--) {
        factorial = factorial * i;
        operacion = operacion + i;

        if (i > 1) {
            operacion = operacion + ' x ';
        }
    }

    if (numero == 0) {
        operacion = '1';
    }

    console.log(`${numero}! = ${operacion} = ${factorial}`);
    
} else {
    console.log('El número debe ser mayor o igual a 0');
}