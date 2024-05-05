
const instructions = document.querySelector('.instructor');
const button = document.getElementById('enter');
let vol = document.querySelector('.container');
let diap = document.querySelector('.container');


vol.style.display= 'none';

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

button.addEventListener('click',calculate);

let randomNum = random(1,10);
function calculate(){
    const inputNum = document.getElementById('input').value;
   
    console.log(inputNum);
    if (inputNum>0){
        if (inputNum == randomNum){

        instructions.innerHTML= "Yor are Right!! Now you can change The volume";
        console.log(randomNum); 
        vol.style.display= 'block';

        }
        else if(inputNum < randomNum){
            instructions.innerHTML= "WRONG! TOO LOW, TRY AGAIN";
            console.log(randomNum);
        }
        else if(inputNum > randomNum){
            instructions.innerHTML= "WRONG! TOO HIGH, TRY AGAIN";
            console.log(randomNum);
        }
  }
  else{
  instructions.innerHTML="from 1 to 10 silly, try again";
  }
}

function totalClick(click){
    const question = document.querySelector('.question');
    const volume= document.getElementById('volume');
    const sumValue = parseInt(volume.innerText)+click;
    console.log(sumValue + click);
    volume.innerHTML=sumValue +"%";
    vol.style.display= 'none';
    randomNum = random(1,10);
    instructions.innerHTML= ". . .";
    question.innerHTML="Guess again to change the volume";


}
