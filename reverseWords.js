function reverseWords(string) {
  let palabras = string.split(" ");
  let final = palabras.map((palabra) => {
    let palFinal = [];
    for (let i = palabra.length - 1; i >= 0; i--) {
        palFinal.push(palabra[i]);
    }
    return palFinal.join("");
  });
    return final.join(" ");
}

console.log(reverseWords("this is a string of words"));
console.log(reverseWords("Coding Javascript"));
