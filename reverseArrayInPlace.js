function reverseArrayInPlace(arr) {
  let contador = arr.length - 1;
  let varTemp;
  for (let i = 0; i < contador; i++) {
    varTemp = arr[i];
    var Temp2;
    for (let j = contador; j >= 0; j--) {
      varTemp2 = arr[j];
      console.log(varTemp2);
      arr.splice(j, 1, varTemp);
      arr.splice(i, 1, varTemp2);
      contador--;
      break;
    }
  }
  return arr;
}

console.log(reverseArrayInPlace([21, 32, 44, 66, 11]));
console.log(reverseArrayInPlace([1,2,3,4,5,6,7]));

