function inverteString(str) {
    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    return reversedString;
}

let stringOriginal = 'coisa alguma';
let stringInvertida = inverteString(stringOriginal);
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);