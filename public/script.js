let currentslide=1;
let sliderElement=document.getElementById('slider');
let totalslides=sliderElement.childElementCount;
console.log(totalslides);
function next(){
 if (currentslide<totalslides){
    currentslide++;
    console.log("hello");
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
     console.log("hello");
     }else{
        element.classList.add('hidden'); 
     }
  }
}
    