const divs = document.getElementsByTagName('div');
let sch= document.getElementById('home');
const  colorButton = document.getElementById('colorChange');
colorButton.addEventListener('click',rainbowColor);
function rainbowColor(){
 for (let i= 0; i<divs.length;i++){
   divs[i].style.backgroundColor=divs[i].id;
 }
   sch.classList.add('school');
}

 function about(event){
  event.target.textContent='hurray';
 }
 colorButton.addEventListener('click',about);

let y = prompt('enter you name');

 let ex = [];
 ex.push(y);
 window.localStorage.setItem('names',JSON.stringify(ex));

 let names = JSON.parse(localStorage.getItem('names'));
 for (let k of names){
  let output =document.getElementById('output');
  
  output.textContent=k;
 }
 