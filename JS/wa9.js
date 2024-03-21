const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "It was hot summer afternoon with 104 fahrenheit on the termometter, so :insertx: decided to go to :inserty:. When they got there,Bob started to feel pain in their tummy, :insertz: decided to give them a bucket to throuw up,  — they then started to throw up 300 pounds of watermelon. It made sence, it was summer.";
const insertX = ["Willy Wonka","Big papa","Mother Nature"];
const insertY = ["the pool","the Lake","the mall"];
const insertZ = ["a gloryous manchild", "the pope","a biblical acurate angel"];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
let newStory = storyText;

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);




    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace("Bob", name);

  
    }
  
    if(document.getElementById("uk").checked) {
      let weight = Math.round(300/14);
      weight = weight + " stone";
      let temperature =  Math.round((94-32)*(5/9));
      temperature= temperature + " centigrade";
      newStory = newStory.replace("300 pounds", weight);
      newStory = newStory.replace("94 fahrenheit", temperature);
    }
  
    story.textContent = newStory ;
    story.style.visibility = 'visible';
  }