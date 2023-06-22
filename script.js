let viewcount = 0;
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
  '--accent-color': '#745d8e',
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


function onLoadIndex(){

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
  console.log(elementId);
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