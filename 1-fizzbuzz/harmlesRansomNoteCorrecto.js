function harmlessRansomNote(noteText,magazineText){
    let fraseCorta = noteText.split(' ');
  
    let textoGrande = magazineText.split(' ');
    var magazineObj = {};
    var respuesta = true;
 


    textoGrande.forEach(palabra=>{
        console.log(palabra)
        if (!magazineObj[palabra]){
            magazineObj[palabra] = 0;
            
            
        } magazineObj[palabra]++; } );
    
        console.log(magazineObj)



    fraseCorta.forEach(palabra=>{
        if(magazineObj[palabra]){

            magazineObj[palabra]--;

            if (magazineObj[palabra] < 0) respuesta = false;

        }

        else respuesta = false;

       

    })



    return respuesta;

}




console.log(harmlessRansomNote("this is a secret note for you from a secret admirer", "puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited"))