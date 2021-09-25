let array = [14,33,27,10,35,19,42,44];

// https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm
// ciclo for
// si primer elemento mayor segundo elemento mover primer elemento a segundo elemento y primero a segundo
// con while hacia atrás comprobar   que no haya elementos mayores y si hay cambiarlos de lugar

for (let i=1 ; i < array.length; i++ ){
    let temp = array[i];
    j = i-1
    while( j > 0 && array[j] > temp){
     
            array[j+1] = array[j]
            j = j-1
    }
    // ai esta en orden no se cambia nanda
    array[j+1] = temp



}


console.log(array)