// toma cualquier numero como parametro
// imprime en la consola todos los numeros hasta num
// si es divisible por 3 imprime fiiz
// si es divisivle por 5  imprime buzz
// y si es divisible por ambos numeros imprime fizz buzz



function fizzBuzz(num) {
    for (var i = 1 ; i <= num ; i++ ){
        if (i % 5 === 0 && i % 3 === 0 ){
            console.log( "fizzbuzz")
        }
        else if ( i % 5 === 0){
            console.log("buzz")
        } else if( i % 3 === 0){
            console.log("fizz ")
        }else{
            console.log(i)
        }

    }
}

fizzBuzz(30);