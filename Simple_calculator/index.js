const buttons = document.querySelectorAll(".buttons");
const display = document.getElementById('display');

buttons.forEach(button => {
          display.textContent="";
                  let buttonValue = button.value;
                     button.addEventListener('click',displayResult)
                      function displayResult(){
                        if ( buttonValue ==='C')
                        {
                           display.textContent=''
              }
                if(buttonValue==='='){
                 let result = display.textContent;
                    let num = eval(result);
                      display.textContent = num;
                }
           else {
                if(buttonValue!=='C'){
            display.textContent +=buttonValue;
      }
    }
  }
})


