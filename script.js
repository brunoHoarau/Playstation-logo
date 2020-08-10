const sony = document.getElementById("sony");
const computer= document.getElementById('computer');
const triangleLeft = document.getElementById('triangleLeft');
const triangleRight = document.getElementById('triangleRight');

const keyframesLeft =  [
  {
    transform: 'translate(55px,185px) scale(2)'
  },{
    transform: 'translate(65px , 65px) scale(1)'
    }
];

const keyframesRight =  [
  {
    transform: 'translate(200px,-50px) scale(2)'
  },{
    transform: 'translate(175px, 65px) scale(1)'
    }
];
     
    
function animationPlaystation(){ 
        
  sony.style.color = "white";
  computer.style.color = "white";

  triangleLeft.animate(keyframesLeft, {duration:2400, iterations: 1});
  triangleRight.animate(keyframesRight, {duration:2400, iterations: 1});

  setTimeout( function animate() {           
    sony.style.color = "black";
    computer.style.color = "black";
    }, 2500);
 }
