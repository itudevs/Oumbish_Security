let currentslide=1;
var totalslides;
var sliderInterval; 



function next() {
     totalslides = getTotalSlides();
    currentslide = currentslide < totalslides ? currentslide + 1 : 1; // Loop to the first slide
    Showslide();
    updateDots();
}

function prev() {
     totalslides = getTotalSlides();
    currentslide = currentslide > 1 ? currentslide - 1 : totalslides; // Loop to the last slide
    Showslide();
    updateDots();
}

function setDef() {
    currentslide = 1;
    Showslide();
    updateDots();
}

function Showslide() {
    const sliderElement = document.getElementById("slider");
    const slides = sliderElement.getElementsByTagName("li");
    const totalslides = slides.length;

    for (let i = 0; i < totalslides; i++) {
        const element = slides[i];
        if (i === currentslide - 1) {
            element.classList.remove("hidden");
            element.style.transform = "translateX(0)";
            element.style.opacity = "1";
            element.style.transition = 
                "transform 0.7s ease-in-out, opacity 0.7s ease-in-out";
        } else {
            const offset = i < currentslide - 1 ? -100 : 100; // Slide direction
            element.style.transform = `translateX(${offset}%)`;
            element.style.opacity = "0";
            element.style.transition =
                "transform 0.7s ease-in-out, opacity 0.7s ease-in-out";
            setTimeout(() => element.classList.add("hidden"), 700);
        }
    }
}

function getTotalSlides() {
    const sliderElement = document.getElementById("slider");
    return sliderElement.childElementCount;
}

function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        if (index === currentslide - 1) {
            dot.classList.remove("bg-gray-300");
            dot.classList.add("bg-red-600"); // Highlight active dot
        } else {
            dot.classList.remove("bg-red-600");
            dot.classList.add("bg-gray-300"); // Reset inactive dots
        }
    });
}


    startSlider(1);
   //startSlider(2);// Update the slider
    // Update the dots
   function goToSlide(index) {
      currentslide = index; // Update the current slide index
     // clearInterval(sliderInterval); // Stop the auto-play
      Showslide(currentslide); // Show the specified slide
      updateDots(); // Update dots to reflect the active slide
      startSlider(currentslide); // Restart the slider from the specified slide
  }

  // Function to start the slider
  function startSlider(index, interval = 9000) {
      currentslide = index; // Set the initial slide
     // Showslide(currentslide); // Show the first slide
      updateDots(); // Update dots to reflect the active slide
  
      // Clear any existing interval to avoid stacking
      clearInterval(sliderInterval);
  
      // Start auto-play with the specified interval
      sliderInterval = setInterval(() => {
          currentslide = currentslide % document.querySelectorAll('.dot').length + 1; // Loop through slides
          Showslide(currentslide);
          updateDots();
      }, interval);
  }


//dropdown item code 
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
const image = document.querySelector('img');

const elements = document.querySelectorAll(':not(img#main-logo)');

// Add a class to all elements except the excluded one

if (image.complete) {
    elements.forEach(element => {
        elements.style.height = `${image.naturalHeight / image.naturalWidth * 100}vh`;
    });
} else {
    image.onload = function () {
        elements.forEach(() => {
            elements.style.height = `${image.naturalHeight / image.naturalWidth * 100}vh`;
        });
    };
}


 



