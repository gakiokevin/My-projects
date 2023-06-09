 let loginBtn = document.querySelector(".loginBtn"),
 closeBtn =document.querySelector('.close'),
 cancelBtn = document.querySelector('.cancelBtn');
 let formContainer= document.querySelector('.formContainer')
 loginBtn.addEventListener('click',()=>{
   let formContainer= document.querySelector('.formContainer')
  formContainer.style.display="block"
  closeBtn.addEventListener('click',()=>{
   formContainer.style.display="none"
 })
 cancelBtn.addEventListener('click',()=>{
   formContainer.style.display="none"
 })
  
 })

 