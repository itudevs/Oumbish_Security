


//Menu and next code 
var currentslide=1;
var totalslides;
var sliderElement;
var sliderInterval; 

function next(index){
   
 if (currentslide<3){
    currentslide++;
    Showslide(index);
     

}
}
function prev(index){
    
 if (currentslide>1){
    currentslide--;
    
    Showslide(index);
 }
}
function setDef(){
   currentslide=1;
}

function Showslide(index){
 if (index===0){
    sliderElement=document.getElementById('slider');
}else{
    sliderElement=document.getElementById(`slider-${index}`);
}
 totalslides=sliderElement.childElementCount;
 console.log(totalslides)
 const slides=sliderElement.getElementsByTagName('li');

  for (let i = 0; i < totalslides; i++) {
     const element = slides[i];
     if (currentslide===i+1){
       
      element.classList.remove('hidden');
      element.style.transform = 'translateX(0)';
      element.style.opacity = '1';
    //   element.style.zIndex = '1';
      element.style.transition = 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out';
     }else{
      const offset = i < currentslide - 1 ? -100 : 100; // Determine direction
      element.style.transform = `translateX(${offset}%)`; // Make next slide partially visible
      element.style.opacity = '0';
     // element.style.zIndex = '0';
      element.style.transition = 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out';
      if (index===0){
      setTimeout(() => element.classList.add('hidden'), 700);}
      else{
         element.classList.add('hidden') 
      } 
     }
  }
 if (index===0){ currentslide = (currentslide % totalslides) + 1;}
}
//services code 

function CreateServices(index){
    let Services=document.getElementById(`Services-${index}`);
   Services.classList.add('hidden');
 
   Services.addEventListener('click',  (index)=> {
    
    CreateServices(index);
 
     console.log('Clicked: Simulates mouseover');
 });
 }
 
 
 
 
 
 function Showserviceimg(index){
    const Serv=document.getElementById(`Services-${index}`);
    console.log(Serv);
    const PopUp=document.getElementById(`modal-wrapper-${index}`);
    console.log(PopUp);
     PopUp.classList.remove('hidden');
    
     Serv.classList.remove('hidden');
 
     Serv.addEventListener('click',  ()=> {
    
       Serv.classList.add('hidden');
    
        console.log('Clicked: Simulates mouseover');
    });
    console.log(Serv);
    
 };
 function Closeserviceimg(index){
    const PopUp=document.getElementById(`modal-wrapper-${index}`);
    PopUp.classList.add('hidden');
    
    for (let i =0;i<currentslide;i++) {
       prev(index);
    }
 };

 // Initialize dropdown state
let dropdown = document.getElementById('mobile-menu');

// Initialize objDrop in sessionStorage if it doesn't exist
if (!sessionStorage.getItem("objDrop")) {
    sessionStorage.setItem("objDrop", JSON.stringify({ count: 0 }));
}

function CloseMenu() {
   const objDrop = JSON.parse(sessionStorage.getItem("objDrop"));
   console.log(objDrop);
   const savedState = sessionStorage.getItem("dropdownState");
if (savedState === 'hidden') {
    dropdown.classList.add('hidden');
} else {
    dropdown.classList.remove('hidden');
}
   console.log(dropdown);
  if (objDrop.count === 0) {
    // Show the menu
    dropdown.classList.remove("hidden");
    dropdown.classList.add("opacity-100", "scale-100");
    dropdown.classList.remove("opacity-0", "scale-95");
    objDrop.count++;
  } else {
    // Hide the menu with a timeout for smooth transition
    dropdown.classList.add("opacity-0", "scale-95");
    dropdown.classList.remove("opacity-100", "scale-100");
    objDrop.count--;

    // Delay hiding the menu completely to allow the transition to complete
    setTimeout(() => {
      if (objDrop.count === 0) dropdown.classList.add("hidden");
    }, 300); // Match the duration of the transition (300ms)
  }
     // Save the updated objDrop back to sessionStorage
     sessionStorage.setItem("objDrop", JSON.stringify(objDrop));
     console.log("Updated objDrop:", objDrop);
 
}
const image = document.querySelector('img');

const elements = document.querySelectorAll(':not(img #main-logo');

// Add a class to all elements except the excluded one

if (image.complete) {
   elements.forEach(() => {
       elements.style.height = `${image.naturalHeight / image.naturalWidth * 100}vh`;
   });
} else {
   image.onload = function () {
       elements.forEach(() => {
           elements.style.height = `${image.naturalHeight / image.naturalWidth * 100}vh`;
       });
   };
}