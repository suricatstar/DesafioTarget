function isFibonacciNumber(num) {
    let a = 0;
    let b = 1;
    let next = a + b;

    while (next <= num) {
        if (next === num) {
            return true; 
        }
        a = b;
        b = next;
        next = a + b;
    }
    
    return false;
}


const numeroInformado = 13; // troque aqui o número
if (isFibonacciNumber(numeroInformado)) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}
