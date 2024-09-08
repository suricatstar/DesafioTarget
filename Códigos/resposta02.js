function verificaA(string) {
    let quantidadeA = 0
    let quantidadea = 0

    for (let i = 0; i < string.length ; i++) {
        if (string[i] === 'a' || string[i] === 'A'){
            if (string[i] === 'a' ) {
                quantidadea ++
            } else if (string[i] === 'A' ) {
                quantidadeA ++
            }
        }
    }

    if (quantidadeA > 0 || quantidadea > 0) {
        console.log(`A quantidade de 'a' aparece ${quantidadea} e a quantidade de 'A' aparece ${quantidadeA} na string`)
    } else{
        console.log('A letra "a" não está presente na string')
    }

}

let stringTeste = "Adocica meu amor"
verificaA(stringTeste)