function twoSum(arrayNum, sum){
  let pares = []
  let hashtable = []
for (var i=0; i < arrayNum.length; i++) {
  let numeroActual = arrayNum[i];
  var complementario = sum - numeroActual;
  if (hashtable.indexOf(complementario) !== -1){ 
    pares.push([numeroActual,complementario])
  }
  hashtable.push(numeroActual)
}

return pares

}



console.log(twoSum([1,6,4,5,3,3] ,7))
console.log(twoSum([1,6,4,5,3,3,8,10] ,11))

// [[6,1],[3,4], [3,4]]

//if  numero  >= sum : excluir ese numero (filtrar)
// if sum - num = 
//arregloresultado = filter (sum - num)
 // arregloresultado.push(num)
//arreglo.push([arregloresultado])