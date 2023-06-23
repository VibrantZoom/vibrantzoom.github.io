
var documentName = document.title;
if(localStorage.getItem("localStorageEnabled")){
  if(documentName != "General Knowledge Quiz"){
    document.getElementById("disclaimerBanner").style.display = "none";
    document.getElementById("nav").style.borderRadius = '10px';  
  }
  

}

let localStorageEnabled = true;
function enableCookies(){
  document.getElementById("disclaimerBanner").style.display = "none";
  localStorageEnabled = true;
  localStorage.setItem("localStorageEnabled", true);
  document.getElementById("nav").style.borderRadius = '10px';
  // more customization
//   navElement.style.borderTopLeftRadius = '10px';
// navElement.style.borderTopRightRadius = '0';
// navElement.style.borderBottomLeftRadius = '0';
// navElement.style.borderBottomRightRadius = '10px';
}
function disableCookies(){
  document.getElementById("disclaimerBanner").style.display = "none";
  document.getElementById("nav").style.borderRadius = '10px';

  localStorageEnabled = false;
}

// addEventListener("mousemove", (event) => {
//   const rect = event.target.getBoundingClientRect();
//   const mouseX = event.clientX - rect.left;
//   const mouseY = event.clientY - rect.top;
//   document.documentElement.style.backgroundImage  = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.06), transparent 40%)`;
//   console.log(mouseX);

// });

// addEventListener("scroll", (event) => {
//   const rect = event.target.getBoundingClientRect();
//   const mouseX = event.clientX - rect.left;
//   const mouseY = event.clientY - rect.top;
//   document.documentElement.style.backgroundImage  = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.06), transparent 40%)`;
//   console.log(mouseX);

// });


if(localStorageEnabled) {
  if(localStorage.getItem("theme") == "black"){
    blackTheme();
    }else if(localStorage.getItem("theme") == "orange"){
    orangeTheme();
    }else if(localStorage.getItem("theme") == "red"){
    redTheme();
    }
}



const observerR = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showR");
  }else{
entry.target.classList.remove("showR");
    }
  });
});
const observerL = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showL");
  }else{
entry.target.classList.remove("showL");
    }
  });
});
const scrollElementsR = document.querySelectorAll(".hiddenR");
const scrollElementsL = document.querySelectorAll(".hiddenL");

scrollElementsR.forEach((element) => observerR.observe(element));
scrollElementsL.forEach((element) => observerL.observe(element));

const hovertarget = document.querySelectorAll(".themedropdown");

for(let i = 0; i < hovertarget.length; i++){
  hovertarget[i].onmouseenter  = function() { 
    const dropdownbtns = document.querySelectorAll(".change-theme-dropdown-icon");
    for(let i = 0; i<dropdownbtns.length; i++){
      if(window.getComputedStyle(dropdownbtns[i]) != "block"){
      dropdownbtns[i].style.display = "block";
      dropdownbtns[i].animate([
{opacity: '0%'},
{opacity: '100%'}


      ],
      {
       duration:500,
       iterations: 1
      });
    }
  }
  }
  hovertarget[i].onmouseleave = function() { 
    const dropdownbtns = document.querySelectorAll(".change-theme-dropdown-icon");
    for(let i = 0; i<dropdownbtns.length; i++){
      dropdownbtns[i].style.display = "none";
  }
  }
  
}
  // var rs = getComputedStyle(r);
function orangeTheme(){
  // https://realtimecolors.com/?colors=0a060e-ff8000-76aa46-d7c5e7-446228
  if(localStorageEnabled){
    localStorage.setItem("theme", "orange");
  }
var r = document.querySelector(':root');
var variableUpdates = {
  '--text-color': '#0a060e',
  '--background-color': '#ff8000',
  '--primary-button-color': '#76aa46',
  '--secondary-button-color': '#3a7701',
  '--accent-color': '#88e035',
  '--subtitle-color': '#b4ea81',
  '--nav-color': 'green',
  '--link-active': '#fccd9f',
  '--link-visited': '#fca955',
  '--link-hover': '#04f952'

};
// Update the variables using a loop
for (var variable in variableUpdates) {
  r.style.setProperty(variable, variableUpdates[variable]);
}

// Set body background color to the updated background color variable
}
function redTheme(){
  if(localStorageEnabled){
  localStorage.setItem("theme", "red");
  }
  // https://realtimecolors.com/?colors=030302-ff5e5e-96bba7-e1d8d1-745d8e
var r = document.querySelector(':root');
var variableUpdates = {
    '--text-color': '#030302',
  '--background-color': '#ff5e5e',
  '--primary-button-color': '#96bba7',
  '--secondary-button-color': '#88cca8',
  '--accent-color': '#4fb580',
  '--subtitle-color': 'darkgrey',
  '--nav-color': 'lightcoral',
  '--link-active': '#02f9c0',
  '--link-visited': '#512925',
  '--link-hover': '#f96743'


};
// Update the variables using a loop
for (var variable in variableUpdates) {
  r.style.setProperty(variable, variableUpdates[variable]);
}

// Set body background color to the updated background color variable
}


function blackTheme(){
//https://realtimecolors.com/?colors=f7fafd-04080c-1b3a55-0c1a27-152d41
if(localStorageEnabled){
  localStorage.setItem("theme", "black");
}
  var r = document.querySelector(':root');

  var variableUpdates = {
    '--text-color': '#f7fafd',
    '--background-color': '#04080c',
    '--primary-button-color': '#1b3a55',
    '--secondary-button-color': '#122d46',
    '--accent-color': '#152d41',
    '--subtitle-color': 'grey',
    '--nav-color': '#1c2731',
    '--link-active': '#02f9c0',
    '--link-visited': 'aqua',
    '--link-hover': 'grey'

  }


  for (var variable in variableUpdates) {
    r.style.setProperty(variable, variableUpdates[variable]);
  }
  
}
const questions = [
  'What is the largest planet in our solar system?',
  'What is this?',
  'What is the capital city of Japan?',
  'What is the largest mammal in the world?',
  'What is the smallest country in the world by land area?',
  'What is the largest ocean in the world?',
  'What is the longest river in the world?',
  'What is the smallest planet in our solar system?',
  'What is the capital of China?',
  'What is the lowest point on Earth?',
  'What is the shortest river in the world?',
  'How many continents are there?',
  'What is the highest temperature ever recorded?',
  'What is the tallest animal on Earth?',
  'What is the smallest mammal on Earth by mass?',
  'What is the most populated country on Earth?',
  'What is the highest mountain on Earth?',
  'What is the chemical symbol for gold?',
  'What is the largest desert on Earth?',
  'What is the largest country on Earth by land area?',
  'What is the largest continent on Earth by land area?'
];



const images = [
  'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
  'images/mysterycountry.png',
  'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1535940360221-641a69c43bac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1166&q=80',
  'https://images.unsplash.com/photo-1634324173063-909962333bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
  'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1555412654-72a95a495858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
  'https://images.unsplash.com/photo-1589889353869-b0c95b307770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
  'https://images.unsplash.com/photo-1586194483662-d84a7a2deba1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1496545087308-51ec893e6bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  ''

];
const option1 = [
  'Saturn',
  'Greenland',
  'Canada',
  'Elephant',
  'Vatican City',
  'Pacific Ocean',
  'Wadi',
  'Mercury',
  'Beijing',
  'Dead Sea',
  'Roe River',
  'Seven',
  '56.7 °C (134.1 °F)',
  'Elephant',
  'Etruscan shrew',
  'India',
  'K2',
  'Ag',
  'Sahara Desert',
  'China',
  'Africa'
];

const option2 = [
  'Jupiter',
  'Tokyo',
  'Tokushima',
  'Ender Dragon',
  'Maza',
  'Atlantic Ocean',
  'Nile',
  'Mars',
  'Shanghai',
  'Mariana Trench',
  'Amazon River',
  'Five',
  '58.8 °C (137.8 °F)',
  'Giraffe',
  'Mouse',
  'China',
  'Mount Everest',
  'Au',
  'Antarctic Desert',
  'Russia',
  'Asia'
];

const option3 = [
  'Earth',
  'Canada',
  'Beijing',
  'Hippopotamus',
  'London',
  'Indian Ocean',
  'Boteti',
  'Venus',
  'Guangzhou',
  'Mount Everest',
  'Yangtze River',
  'Six',
  '57.8 °C (136.0 °F)',
  'Blue whale',
  'Bat',
  'United States',
  'Mount Kilimanjaro',
  'Fe',
  'Gobi Desert',
  'Canada',
  'North America'
];
const option4 = [
  'ROXs 42 Bb',
  'Metaphor',
  'Tokyo',
  'Blue whale',
  'Saint-Louis-de-Gonzague-du-Cap-Tourmente',
  'Southern Ocean',
  'Ruzizi',
  'Jupiter',
  'Hong Kong',
  'Challenger Deep',
  'Nile River',
  'Eight',
  '55.0 °C (131.0 °F)',
  'Ostrich',
  'Hedgehog',
  'Indonesia',
  'Mount Fuji',
  'Hg',
  'Arabian Desert',
  'United States',
  'Europe'
];
const answers = [
  'Jupiter',
'Canada',
  'Tokyo',
  'Blue whale',
  'Vatican City',
  'Pacific Ocean',
  'Nile',
  'Mercury',
  'Beijing',
  'Challenger Deep',
  'Roe River',
  'Seven',
  '56.7 °C (134.1 °F)',
  'Giraffe',
  'Etruscan shrew',
  'China',
  'Mount Everest',
  'Au',
  'Antarctic Desert',
  'Russia',
  'Asia'
];
let wrong = 0;
let right = 0;
let qnum = 0;
let qremainingHtml = document.getElementById("qremaining");
let questionHtml = document.getElementById("triviaquestion"); 
let imageHtml = document.getElementById("qimage");
let option1btn = document.getElementById("option1");
let option2btn = document.getElementById("option2");
let option3btn = document.getElementById("option3");
let option4btn = document.getElementById("option4");
let answersHtml = document.getElementById("answekey");
let multichoicebtns = document.getElementById("multichoicebtns");
let goToNextQuestionBtn = document.getElementById("go-to-next-question");
const optionbtns = document.querySelectorAll(".optionbtn");
const homebtn = document.getElementById("gohome");
const playagainbtn = document.getElementById("playagain");
let qhaventdone = [];
let currentq = 0;
let amntofqs = 10;
for (let i = 1; i<=answers.length; i++) {
qhaventdone.push(i);
}

function startTrivia(){
  qremainingHtml.innerText = "Questions Remaining: " + (amntofqs - qnum);
if(qnum >= amntofqs){
  answersHtml.innerText = "gud job. try again for a better score. questions are randomly picked from a pool of 21.";
  answersHtml.style.color = "white";
  questionHtml.innerText = "You got " + (wrong) + " questions wrong and "+ (right) +" questions right! Score: " + ((right/questions.length)*100) + "%";
imageHtml.src = "https://images.unsplash.com/photo-1580893211123-627e0262be3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
homebtn.style.display = "block";
playagainbtn.style.display = "block";
goToNextQuestionBtn.style.display = "none";
return;
}
  answersHtml.innerText = "";
  optionbtns.forEach(btn => {
    btn.style.display = "block";
  });
  goToNextQuestionBtn.style.display = "none";
  let toremove = Math.floor(Math.random() * qhaventdone.length);
  currentq = qhaventdone[toremove];
  currentq--;
  qhaventdone.splice(toremove, 1);


  questionHtml.innerText = questions[currentq];
  var options = [option1[currentq], option2[currentq], option3[currentq], option4[currentq]];

  // Shuffle the options array
  for (var i = options.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = options[i];
    options[i] = options[j];
    options[j] = temp;
  }
  
  option1btn.innerText = options[0];
  option2btn.innerText = options[1];
  option3btn.innerText = options[2];
  option4btn.innerText = options[3];
  
  imageHtml.src = images[currentq];
}
function nextQuestion(btn) {
if(btn.innerText == answers[currentq]){
answersHtml.innerText = "Correct! Correct answer: " + (answers[currentq]);
answersHtml.style.color = "lightgreen";
right++;
}else{
  answersHtml.innerText = "Incorrect! Correct answer: " + (answers[currentq]);
  answersHtml.style.color = "red";
  wrong++;
}

optionbtns.forEach(btn => {
  btn.style.display = "none";
});
goToNextQuestionBtn.style.display = "block";

}
function goToNextQuestion(){
  qnum++;
startTrivia();
}

// function onLoadIndex(){
//   console.log("dsfsadf");
// const bodyelements = document.body.children;

// for(let i = 0; i < bodyelements.length; i++){
  
//   bodyelements[i].animate([
//     // key frames
//     // { transform: "translateY(100px)"},
//     // { transform: "translateY(0px)" }
//     { transform: "translateY(25%)",
//     opacity: "0%"
  
//   },
//     { transform: "translateY(0%)",
//     opacity: "100%"
//   }
//   ], {
//     // sync options
//     duration: 500,
//     iterations: 1,
//     easing: "ease-in-out"

//   }); 
// }

// }


function onLoadCompoundList(){
if(localStorage.getItem("donetutorial")){
  var mouseanimation = document.getElementById("click-tutorialtitle");
  mouseanimation.style.display = "none";  
  var mouseanimation = document.getElementById("click-tutorialscroll");
  mouseanimation.style.display = "none";
  
}

}

function revealImages(){
  var btns = document.getElementsByClassName("imagebutton");
  for(let i = 0; i<btns.length; i++){
    let computedStyle = window.getComputedStyle(btns[i]);
    if(computedStyle.display== "inline-block"){
      btns[i].style.display = "none";
    }else{
      btns[i].style.display = "inline-block";
      btns[i].animate([
        // key frames
        // { transform: "translateY(100px)"},
        // { transform: "translateY(0px)" }
        { opacity: "0%"},
        { opacity: "100%" }
      ], {
        // sync options
        duration: 200,
        iterations: 1

      });    }
  }
}

function scrollll(){
 

var mouseanimation = document.getElementById("click-tutorialscroll");
mouseanimation.style.display = "none";

  window.scroll({
    top: 1500,
    behavior: "smooth",
  });}
  let clicks = 0;
  // optimize using strings l8tr (TODO)

  var shown = false;

async function aceticacidclick(){
  clicks++;
 if(clicks == 1){
  var mouseanimation = document.getElementById("click-tutorialtitle");
  mouseanimation.classList.add("fa-bounce");
  mouseanimation.classList.remove("fa-beat-fade");
  
  window.scroll({
    top: 1500,
    behavior: "smooth",
  })
}else if(clicks >= 2){
  if(localStorageEnabled){
  localStorage.setItem("donetutorial", true);
  }
  var mouseanimation = document.getElementById("click-tutorialtitle");
  mouseanimation.style.display = "none";  
}
var mouseani = document.getElementsByClassName("aceticacid-description");

  // let computedStyle = window.getComputedStyle(mouseani[0]);
  // computedStyle.display== "inline-block" 
  var desc = document.getElementsByClassName("aceticacid-description");

  if(window.getComputedStyle(desc[0]).display == "block") {
    for(let i = 0; i<mouseani.length; i++){
    mouseani[i].style.display = "inline";
      // mouseani[i].animate([
      //   // key frames
      //   // { transform: "translateY(100px)"},
      //   // { transform: "translateY(0px)" }
      //   { opacity: "100%"},
      //   { opacity: "0%" }
      // ], {
      //   // sync options
      //   duration: 200,
      //   iterations: 1

      // });   
      // Figure out way to make all go at once
      // await new Promise(resolve => setTimeout(resolve,190));


      mouseani[i].style.display = "none";
      shown = false;
    }
  }else{
    for(let i = 0; i<mouseani.length; i++){
    mouseani[i].style.display = "inline";
    shown = true;
    }
  }

}


async function nitricacidclick(){
var desc = document.getElementsByClassName("nitricacid-description");
  // computedStyle.display== "inline-block" 
  if(window.getComputedStyle(desc[0]).display == "block") {
    for(let i = 0; i<desc.length; i++){
    desc[i].style.display = "inline-block";
      // desc[i].animate([
      //   // key frames
      //   // { transform: "translateY(100px)"},
      //   // { transform: "translateY(0px)" }
      //   { opacity: "100%"},
      //   { opacity: "0%" }
      // ], {
      //   // sync options
      //   duration: 200,
      //   iterations: 1

      // });   
      // Figure out way to make all go at once
      // await new Promise(resolve => setTimeout(resolve,190));


      desc[i].style.display = "none";
      shown = false;
    }
  }else{
    for(let i = 0; i<desc.length; i++){
    desc[i].style.display = "inline-block";
    shown = true;
    }
  }

}
async function phosphoricacidclick(){
  var desc = document.getElementsByClassName("phosphoricacid-description");
    // computedStyle.display== "inline-block" 
    if(window.getComputedStyle(desc[0]).display == "block"){ 
      for(let i = 0; i<desc.length; i++){
      desc[i].style.display = "inline-block";
        // desc[i].animate([
        //   // key frames
        //   // { transform: "translateY(100px)"},
        //   // { transform: "translateY(0px)" }
        //   { opacity: "100%"},
        //   { opacity: "0%" }
        // ], {
        //   // sync options
        //   duration: 200,
        //   iterations: 1
  
        // });   
        // Figure out way to make all go at once
        // await new Promise(resolve => setTimeout(resolve,190));
  
  
        desc[i].style.display = "none";
        shown = false;
      }
    }else{
      for(let i = 0; i<desc.length; i++){
        desc[i].style.display = "inline-block";
      shown = true;
      }
    }
  
  }
  function seeTutorialAgain(){
    if(localStorageEnabled){
     localStorage.removeItem("donetutorial");
    }
    window.scroll({
      top: 0
    })
    location.reload();
    return false;

  }


function learnmore(){  
  let rand = getRandomInt(3);
  if(localStorageEnabled){
    if(!localStorage.getItem("rickrld")){
      window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      localStorage.setItem("rickrld", true);
      return;
    }
  }
  if(rand == 0){
    window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }else if (rand == 1){
    window.location='https://www.dhmo.org/facts.html';
  }else if(rand == 2){
window.location='http://www.armory.com/~crisper/DHMO';
  }

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Do later?

// function navcolumn(){
//   let container = document.querySelectorAll('.container');
//   let column = document.getElementById('column');
//   let height = document.body.offsetHeight;
//   column.style.height = height + "px";
//   column.style.display = "block";
//       column.animate([
//           // key frames
//           { transform: "translateX(30vw)"},
//           { transform: "translateX(0px)" }

//         ], {
//           // sync options
//           duration: 200,
//           iterations: 1
  
//         });   
// }


function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    var elementRect = element.getBoundingClientRect();
    var absoluteElementTop = elementRect.top + window.pageYOffset;
    var middleOfViewport = window.innerHeight / 2;
    var scrollToPosition = absoluteElementTop - middleOfViewport;
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }
}