console.log ("this is me testing that I have linked my JS to the HTML")
// Leaving this in my code for now, so I can see if anything breaks down the line.

const valueObjects = [
    { src: "https://www.nasa.gov/wp-content/uploads/2024/12/afrc2024-0166-033orig.jpg", alt: "Photograph of a high-tech drone flying across a blue sky, with a distant moon in the background."},
    { src: "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/galaxies/spiral/Hubble_NGC5643_potw2450a.jpg?w=4096&format=webp&fit=clip&crop=faces%2Cfocalpoint", alt: "Photograph of a swirling, red galaxy in space."},
];

console.log (valueObjects.length);
// Lines 11,12,13 and 14 assigns a value to my HTML containters in the DOM. I am doing this so I can select and manipulate them in JavaScript.
const ThumbnailsContainer = document.querySelector(".Thumbnails-Container");
console.log;(ThumbnailsContainer);
const FullSizedImgContainer = document.querySelector(".Fullsizedimg-Container");
console.log;(FullSizedImgContainer);
// Line 16 declares the function to create thumbnails. I wi
function generatethumbnails() {
    // line 23 is going to look inside the 'valueObjects' array -> perform the following function 'FOREACH' of the objects found in the array. Also, for the following objects in the array, they will be reffered to as 'currentObject'. For each object the function finds in the array, it will refer to that object as 'currentObject' from now on.
    valueObjects.forEach(function(currentObject)){
    let generatedImage = document.createElement("img");
    // lines 26 and 27 are setting the src and alt for our newly generated image element. They are matching the value of the src and alt of the object that the FOREACH loop is looking at, at the time. The reason that we refer to the src and alt of the array object as currentObject.src and currentObject.alt is because we told the function that we would refer to these objects as 'currentObject'.
    generatedImage.src = currentObject.src;
    generatedImage.alt = currentObject.alt;
    // Lines 29 and 30 will set the width and height of the generated image.
    generatedImage.width(150px);
    generatedImage.height(100px);
    // Line 27 will append the function's output to the 'Thumbnails-Container' section in the HTML.
    ThumbnailsContainer.appendChild(generatedImage);
    // Line 29 will log the newly generated image to the console.
    console.log (generatedImage);
    // Line 31 adds the 'event' for when the user clicks on the thumnail images to display the larger version of the image.
    addEventListener("click", handleClick, displayLargeImage());
} 
    };
    generatethumbnails();

    // I have now written the function that will generate the thumbnail images and defined the parameters for the function.

    // Below is my inital image source loop. Joe very kindly introduced me to the 'forEach' loop to use instead.
//     let generatedImage = document.createElement("img");
//     generatedImage.src = "";
//     generatedImage.alt = "";
// for (let i = 0; i =< images.length; i++);
  

  //The larger images will be created when the user triggers the thumbnail images event
  //This function will be event handler for our images
  function displayLargeImage() {
    FullSizedImgContainer.innerHTML = null;
    valueObjects.forEach(function(largerObject)){
        let largerGeneratedImage = document.createElement("img");
        largerGeneratedImage.src = largerObject.src;
        largerGeneratedImage.alt = largerObject.alt;
        largerGeneratedImage.width(100rem);
        largerGeneratedImage.height(100rem);
        FullSizedImgContainer.appendChild(largerGeneratedImage);
        console.log(largerGeneratedImage);
    }
    };
  
