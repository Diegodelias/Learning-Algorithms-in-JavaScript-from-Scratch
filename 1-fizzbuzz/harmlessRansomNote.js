function harmlessRansomNote(noteText,magazineText){
    
    let fraseCorta = noteText.split(' ');
    let limiteAlmacenamiento = noteText.split(' ').length;
    let almacenamiento = new Array(limiteAlmacenamiento);
    let textoGrande = magazineText.split(' ');
    let i = 0;

    while ( i < limiteAlmacenamiento){

        var index = hashFunction(fraseCorta[i],limiteAlmacenamiento);
        console.log(index)
        almacenamiento[index] = [fraseCorta[i],''];

        i++;
    }
    // agarrame la cabeza de verga
    console.log(almacenamiento)
    
    for (var j = 0 ; j < textoGrande.length; j++){
        var index = hashFunction(textoGrande[j],limiteAlmacenamiento);
        console.log(index);
        console.log(textoGrande[j])
        if (almacenamiento[index][j][j] === ''){

        }
    }
    
 
// recorrer el arreglo y verificar que el string no  este alamacenado
// en ninguna posicion si y a existe uno igual retornar false si no
// alamacenarlo en el numero de psocion correspodiente al hash en caso colsicion
//linear Probing
// hash function

return limiteAlmacenamiento

}

//max cantidad posiciones del array o buckets
function hashFunction(string, max){
    var hash = 0;
    for (var i = 0; i < string.length; i ++){
        hash += string.charCodeAt(i);
    }

    return hash % max;

}

console.log(harmlessRansomNote("agarrame la cabeza de verga", "agarrame cabeza de verga hola cabeza de verga"))