const header = document.getElementById("header")
console.log(header.innerHTML)
const input = document.getElementById("input")

input.innerHTML= ">" + " " + prompt("Entrer le nombre d'étage:")

console.log(">" + " " + document.getElementById("input").innerHTML.slice(5))

const textRresult = document.getElementById("text-result")
console.log(textRresult.innerHTML)

function pyramid(nbr){
    if (nbr> 0 && nbr<= 25){
     const minPoint= Math.floor((nbr * 2 - 1) / 2)
        
     for (let i=0; i< nbr; i++){
        let level='';
        for(let j=0; j< nbr * 2 - 1; j++){
        
           if(minPoint - i <= j && minPoint + i >= j){
             level +='#';
            }   else{
             level +=' ';
            }
        }
        console.log(level)
        }
    }
    else{ alert('refaire cette expérience')}
};

pyramid(parseInt(document.getElementById("input").innerHTML.slice(5)))
   