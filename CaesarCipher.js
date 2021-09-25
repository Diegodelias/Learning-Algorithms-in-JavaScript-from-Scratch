function caesarCipher(str, num){
  console.log(num)
  num = num % 26;
  console.log(num)
  var texto = str.toLowerCase();
  var stringNuevo=''
  texto = texto.split('')
  var abecedario = 'abcdefghijklmnopqrstuvwxyz'.split('');
for (var i=0; i < texto.length ; i++){
    if(texto[i] === ' '){
        stringNuevo += texto[i]
        continue
    }
  
    var indice = abecedario.indexOf(texto[i])

    var indiceNuevo = indice + num;
    
    if (indiceNuevo > 25){
       indiceNuevo = indiceNuevo-26;
    }
     if (indiceNuevo < 0)  {
     
        indiceNuevo = 26 + indiceNuevo;
        
    } if (str[i] === texto[i].toUpperCase()){
            stringNuevo += abecedario[indiceNuevo].toUpperCase();
        }  else {
                 
        stringNuevo += abecedario[indiceNuevo];
        }
   
 }
   
   


    return stringNuevo
}

console.log(caesarCipher("Zoo Keeper",300))
// Bqq Mggrgt

console.log(caesarCipher("Big Car", -16))
// Lsq Mkb

console.log(caesarCipher("Javascript", -900))