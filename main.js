//get model element

var modal = document.getElementById('simpleModal');

//get open modal button

var modalBtn = document.getElementById('modalBtn');


//get close button
var closeBtn = document.getElementsByClassName("closeBtn").item(0);

//listen for click
modalBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);

//outside click
window.addEventListener('click',clickOutside);
//function openModal
function openModal(){
   modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
 }

 function clickOutside(e){
    if(e.target == modal)
        modal.style.display = 'none';
 }