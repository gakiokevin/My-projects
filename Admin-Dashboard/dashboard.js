


/*const search = document.getElementById('search');
const display = document.getElementById('display');
const button = document.getElementById('button');
// const delete = document.getElementById('delete');

//function delete() {


//}

button.addEventListener("click",displayResult);
 function displayResult()
 {
   display.textContent+= search.value + ' ';
}
*/

let myLibrary=[]

function Book(title,author,pages){
   this.title=title;
   this.author=author;
   this.pages=pages;

}
function addBookToLibrary(){
   let title=prompt('Enter the title: ');
   let author=prompt('Enter the author name');
   let pages=parseInt(prompt('Pages of the book'));
   let book=new Book(title, author, pages);
     myLibrary.push(book);
     return myLibrary;


}


//addBookToLibrary()
//addBookToLibrary()
//addBookToLibrary()
function display(){
   addBookToLibrary()
     addBookToLibrary()
       addBookToLibrary()

   
   const table= document.getElementById('table');
    let thead1=document.createElement('th')
       thead1.style.border='2px solid red'
        thead1.textContent='TITLE';
      let thead2=document.createElement('th')
       thead2.style.border='2px solid red'
         thead2.textContent='AUTHOR'
         let thead3=document.createElement('th')
          thead3.style.border='2px solid red'
            thead3.textContent='PAGES'
              let row = document.createElement('tr')
                row.style.border='2px solid red'

             row.appendChild(thead1);
    row.appendChild(thead2);
    row.appendChild(thead3);
    table.style.width='600px';
    table.style.height='auto';

    table.style.border='2px solid red';
    table.appendChild(row);


    for(let j=0; j<myLibrary.length;j++){
      //console.log(`The ${myLibrary[j].title} by ${myLibrary[j].author} is ${myLibrary[j].//pages} pages\n`);
      
    let row1 = document.createElement('tr')
    let tdata= document.createElement('td');
    let tdata1= document.createElement('td');
    let tdata2= document.createElement('td');
    tdata.textContent=myLibrary[j].title;
    tdata1.textContent=myLibrary[j].author;
    tdata2.textContent=myLibrary[j].pages;
    row1.appendChild(tdata);
    row1.appendChild(tdata1);
    row1.appendChild(tdata2);
    table.appendChild(row1);
    
  }

}

 display();