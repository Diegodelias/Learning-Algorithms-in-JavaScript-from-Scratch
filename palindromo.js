function palindromo(stringTexto){
    var res = true;
    var string = stringTexto.toLowerCase()
    var caracteresValidos = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var ordenado =  string.split("").filter( letra => caracteresValidos.indexOf(letra) > -1 );
    var invertido = ordenado.map(item => item).reverse();
    console.log(ordenado)
    console.log(invertido)

    if (ordenado.length != invertido.length){

        res = false;
    } else {
        for (var i=0 ; i < ordenado.length; i++){
            if(ordenado[i]!= invertido[i]){
                res= false;
            } 

        }
    }


   
    return res
}

console.log(palindromo("atar a la rata"))
console.log(palindromo("Madam I'm adam"))
console.log(palindromo("Matar a la rata"))
console.log(palindromo("race car"))