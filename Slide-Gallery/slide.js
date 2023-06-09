
window.addEventListener('DOMContentLoaded',()=>{
localStorage.setItem('carImages', JSON.stringify(['./images/1.jpg','./images/2.jpg','./images/6.jpg','./images/7.jpg','./images/5.jpg']))
let  Images = JSON.parse(localStorage.getItem('carImages'))
let slidePosition = 0;
addImage(slidePosition);
 function addImage(index){
      let slide= document.querySelector('.imageSlide')
      slide.textContent=''
      let image= document.createElement('img')
      image.src=Images[index];
      image.alt='some fancy car'
      slide.appendChild(image);
      image.classList.add('slide-in');
   };
   
   slideDisplay()
     function slideDisplay(){
      let slides= document.querySelectorAll('#slide')
      for(let j = 0; j<slides.length; j++){
        let slide=slides[j]
         let image1 = document.createElement('img');
         image1.src=Images[j]
         image1.alt='Fancy Car'
         slide.appendChild(image1)
   
         slide.addEventListener('click',()=>{
            slidePosition = j;
            addImage(slidePosition)
         })
    }
   };
   
   let nextButton = document.querySelector('.next')
   nextButton.addEventListener('click',displayNext)
   function displayNext(){
      slidePosition++;
      if(slidePosition >=Images.length){
         slidePosition = 0;
      }
      addImage(slidePosition)
   };
   let previousButton = document.querySelector('.previous')
   previousButton.addEventListener('click',displayPrevious)
   function displayPrevious(){
   slidePosition--
   if(slidePosition < 0){
      slidePosition = Images.length - 1;
   }
   addImage(slidePosition);
   }
})

