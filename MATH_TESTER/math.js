
let login = document.getElementById('login')
login.addEventListener('click',()=>{
   let container =document.getElementById('container')
   container.style.display="block" 
})
 

let operand1 = document.getElementById('first-operand'),
    operand2 = document.getElementById('second-operand'),
    operator = document.getElementById('operator'),
    input = document.getElementById('myInput'),
    compare = document.getElementById('compare')
      // let result =operand1.textContent + operand2.textContent
      let randomNumber1 = Math.ceil(Math.random() * 500)
      let randomNumber2 = Math.ceil(Math.random() * 500)
      operand1.textContent=randomNumber1
      operand2.textContent =randomNumber2
      let result =parseInt(operand1.textContent) + parseInt(operand2.textContent)
      let progress = document.getElementById('progress')
      progress.style.width="0px"
      progress.textContent=""
      let score = 0
       compare.addEventListener('click',appMath)
       function appMath(){ 
       let inputValue = input.value.trim() 
       if(inputValue!==""){
             if(parseInt(inputValue) === result){
               score +=10;
            input.style.backgroundColor ="green"
            progress.style.width=score *2 + 'px'
            progress.textContent =`${score}%`
            progress.style.display="block"
            randomNumber1 = Math.ceil(Math.random() * 500)
           let randomNumber2 = Math.ceil(Math.random() * 500)
          operand1.textContent=randomNumber1
          operand2.textContent =randomNumber2
         result = parseInt(operand1.textContent) + parseInt(operand2.textContent)

         } else {
            input.style.backgroundColor ="red"
            
         }
         input.value =" "
         
    }else{
      alert('enter a number')
    }
    
   }
    
   // let operators ="x/+-"
   // for(let j=0;j<operators.length;j++){
   //    console.log(operators.charAt(j))
   // }
   // let m = Math.ceil(Math.random()*5)
   // console.log(m)
//setInterval(
 //  function interval(){
 //     let date = new Date()
   //   console.log(date.getSeconds())
 //  },1000
   
//)
    
 