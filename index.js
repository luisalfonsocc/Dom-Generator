//Generador de Dominios WEB

let pronoun = ['the', 'our'];
let adj = ['great' , 'big'];
let noun = ['jogger' , 'racoon'];
const domain = ".com"

for(let pronombre of pronoun){
    for(let adjetivo of adj){
        for(let nombre of noun){
            console.log([pronombre] +  [adjetivo] +  [nombre] + domain);    
        }
    }
    
}

