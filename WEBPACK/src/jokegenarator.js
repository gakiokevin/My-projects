 function generateJoke(){
   console.log("I don't trust the stairs, they are always up to something");
}
 function addElement(){
   let element=document.createElement('div');
    element.textContent="hello world ,It's Kevin running webpack";

    element.style.color='red';
    element.style.fontSize='100px';
    element.style.textAlign='center';
    document.body.appendChild(element);
};
export {addElement,generateJoke}
