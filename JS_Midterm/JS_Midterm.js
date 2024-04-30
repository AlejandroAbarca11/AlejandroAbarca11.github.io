
const instructions = document.querySelector('.instructor');
const button = document.getElementById('enter')
let volume= document.querySelector('.volume');


volume= 50;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

button.addEventListener('click',calculate);
const randomNum = random(1,10);



function calculate(){

    const inputNum = document.getElementById('input').value;
   
    console.log(inputNum);
    if (inputNum>0){
        if (inputNum == randomNum){
        instructions.innerHTML= "Yor are Right!!";
        console.log(randomNum); 
        volumeChange();
        }
        else{
            instructions.innerHTML= "WRONG! try again";
            console.log(randomNum);
        }
  }
  else{
  instructions.innerHTML="from 1 to 10 silly, try again";
  }
}

function volumeChange (){
    const question = document.querySelector(".question");
    question.innerHTML="Do you want to turn the volume up or down?(up or down)";
    const input =document.getElementById('input');
    button.addEventListener('click',function(){
    if(input=="up"||"Up"){
        volume+=1;
        console.log("yvolume is "+volume)
        volume.innerHTML=volume +"%";
    }
    else if(input=="down"||"Down"){
        volume -=1;
        volume.innerHTML= volume +"%";
    }
    else{
        alert("Wrong! up or down");
}
    });
}