function suma (array){
    let arrayTemp = array

    if(arrayTemp.length < 1) return 0;
    console.log(array)
    return array.pop() + suma(array);
   
 
}


function getMean(array){
    // The mean is the total of the numbers divided by how many numbers there are.

    // To find the mean, add all the numbers together then divide by the number of numbers.
    // Eg 6 + 3 + 100 + 3 + 13 = 125 ÷ 5 = 25
    // The mean is 25.
    // The mean is not always a whole number.
    // 1- sumar todos los numeros del array 2- dividir total por la longitud del arreglo
    let arrayLong =  array.length;
    const ressuma = suma(array);
   
    return ressuma / arrayLong ;
   
    




}

function getMedian(array){
//     The median is the middle value.

// To find the median, order the numbers and see which one is in the middle of the list.
// Eg 3, 3, 6, 13, 100 = 6
// The median is 6.
// If there are two middle values the median is halfway between them. This might not be a whole number.
let median

for (let i= 1 ; i < array.length ; i++){
    let valorActual = array[i];
    let j = i-1;
    while ( j >= 0 && array[j] > valorActual){
            array[j+1] = array[j];

        j--
    }
    // supongo que si  array[j] no es menor hace esto
    array[j+1] = valorActual;
    
}

if (array.length % 2 !==0){
    median = array[Math.floor(array.length / 2)]

} else {
 let medioNum1 = array[array.length / 2 - 1]
 let medioNum2 =  array[array.length / 2 ]
 median = (medioNum1 + medioNum2) /2;

}


return median

}

function getMode(array){
    // The mode is the number that appears the most.

    // To find the mode, order the numbers lowest to highest and see which number appears the most often.
    // Eg 3, 3, 6, 13, 100 = 3
    // The mode is 3.
    for (let i= 1 ; i < array.length ; i++){
        let valorActual = array[i];
        let j = i-1;
        while ( j >= 0 && array[j] > valorActual){
                array[j+1] = array[j];
    
            j--
        }
        // supongo que si  array[j] no es menor hace esto
        array[j+1] = valorActual;
        
    }
    const res = {};
    for (let i = 0; i < array.length ; i++ ){
        
    //si la key del arreglo ya está creada le suma uno al valor si no estaba creada arranca en 1      
       res[array[i]] = (res[array[i]]+1 || 1);
      

        }
        console.log(res)
    
    let valorMax= -1
    let resultado=[]
    for (const [key, valor] of  Object.entries(res)){
        if(valor > valorMax){
            valorMax= valor
            resultado.push(key)
        } else if (valor === valorMax){
            resultado.push(key)

         
        } 


    }
 
    if (resultado.length ===  Object.keys(res).length){
        resultado.splice(0, array.length)
}
    return resultado

    }
    // console.log(res)
    // console.log(array)
    // repetido guardar valor y letra en un objeto
    //borrar ese numero del array filter?




function meanMedianMode(array) {
    let arrayTemp = [...array];
    console.log(arrayTemp)
    let objetoResultado = {}
    objetoResultado["Mean"]= getMean(arrayTemp)
    objetoResultado["median"]= getMedian(array)
    objetoResultado["mode"]= getMode(array)
    
    
    console.log(array)

    return objetoResultado
}

//  resultado objeto con estructura { mean: 'the_mean_val, median: 'the_median_val', mode ='the_mode_vals'}



// console.log(getMean([6 , 3 ,100 , 3 ,13  ]))

console.log(meanMedianMode([6 , 3 ,100 , 3 ,13,13  ]))
console.log(meanMedianMode([1 , 2 ,3 , 4,5,4,6,1  ])) //mean:3.25, median: 3.5 , mode:1 y 4
console.log(meanMedianMode([9,10,23,10,23,9,8,8,8]))
// mean_ 3.25, median: 3.5 , mode:vacio