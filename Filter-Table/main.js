let input,filter,tr,td,i,table;


input= document.getElementById('myInput')

input.onkeyup = function mySearch(){
      table = document.getElementById('myTable')
      tr=table.getElementsByTagName('tr')
      filter = input.value.toUpperCase()
   for(i = 1; i < tr.length; i++){
      td = tr[i].getElementsByTagName('td')[0]
      if(td){
         if(td.textContent.toUpperCase().indexOf(filter) > -1 ){
            tr[i].style.display= ""
         } else {
            tr[i].style.display="none"
         }
      }
   }
 }
 