let currentslide=1;
let sliderElement=document.getElementById('slider');
let totalslides=sliderElement.childElementCount;
console.log(totalslides);
function next(){
 if (currentslide<totalslides){
    currentslide++;
    Showslide();
 }
}
function prev(){
    
 if (currentslide>1){
    currentslide--;
    
    Showslide();
 }
}

function Showslide(){
 const slides=sliderElement.getElementsByTagName('li');
  for (let i = 0; i < totalslides; i++) {
     const element = slides[i];
     if (currentslide===i+1){
        element.classList.remove('hidden');
     }else{
        element.classList.add('hidden'); 
     }
  }
}
//dropdown item code
let dropdown=document.getElementById('mobile-menu');
objDrop={
    count:0
}
function CloseMenu(){
       if (objDrop.count===0){
        dropdown.classList.remove('hidden');
        objDrop.count++;
       }
       else{
        dropdown.classList.add('hidden');
        objDrop.count--;
       }
    
    
}
    