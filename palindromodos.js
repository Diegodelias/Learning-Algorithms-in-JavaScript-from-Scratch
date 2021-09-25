function palindromo(stringTexto){
    var string = stringTexto.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var letterArr = [];
    charactersArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) letterArr.push(char);
    });

    if(letterArr.join('')===letterArr.reverse().join('')) return true;
    else return false


}


console.log(palindromo("atar a la rata"))
console.log(palindromo("Madam I'm adam"))
console.log(palindromo("Matar a la ratax"))