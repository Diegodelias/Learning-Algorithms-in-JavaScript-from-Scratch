function twoSum(arrayNum, sum){
    // retornar cada par de unmeros de array num cuya suma sea igual a sum
    // ejemplo  numArray = [1,6,4,5,3,3] sum = 7
    //resultado debería ser result =[[6,1],[3,4], [3,4]]
    //resultado debe ser en forma de array de array o array multidimensional
    //culaquier numero en arrayNum puede ser usado en varios pares
    //usar hash table
   
    // crear objeto con una key por cada numero (numero seria el el valor)
    // { 
    //     0:1
    //     1:6
    //     2:4
    //     3:5
    //     4:3
    //     5:3
    // }

//   obj[0] + obj[1]
// sum - (obj[0] + obj[1]) === 0

// resutado = []
// if (sum - (obj[0] + obj[1]) === 0){
  //  resultado.push.([obj[0],obj[1]]
//}

// for (let i=0; i < arrayNum.length ; i++){
//     // if (sum - (obj[i] + obj[i+1]) === 0){
//   //  resultado.push.([obj[0],obj[1]]
// //}

// }
let resultado = [];
let tempArray;
let numeroTemp;
arrayNumFilt = arrayNum.filter(function(num){
  return num < sum
})
console.log(arrayNumFilt)


for (let i=0; i < arrayNumFilt.length ; i++) {
  numeroTemp = sum - arrayNumFilt[i];
  console.log(numeroTemp)
  tempArray = arrayNumFilt.filter(function(numero){
      return numero === numeroTemp
  })
  console.log( tempArray)
  tempArray.push(numeroTemp)
  if (tempArray.length > 0){
    resultado.push(tempArray)
  }
  

return resultado

}

}

console.log(twoSum([1,6,4,5,3,3] ,7))
console.log(twoSum([1,6,4,5,3,3,8,10] ,11))

// [[6,1],[3,4], [3,4]]

//if  numero  >= sum : excluir ese numero (filtrar)
// if sum - num = 
//arregloresultado = filter (sum - num)
 // arregloresultado.push(num)
//arreglo.push([arregloresultado])