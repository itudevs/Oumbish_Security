let currentslide=1;
var totalslides;
var sliderElement;


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
     }else{
        element.classList.add('hidden'); 
     }
  }
}
//dropdown item code
let dropdown=document.getElementById('mobile-menu');
const objDrop = { count: 0 }; // Object to track the menu state

function CloseMenu() {
   console.log(typeof(objDrop));
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

};
const image = document.querySelector('img');

const elements = document.querySelectorAll(':not(img #main-logo');

// Add a class to all elements except the excluded one
elements.forEach(element => {
   elements.style.height = `${image.naturalHeight / image.naturalWidth * 100}vh`;
});


 


    
