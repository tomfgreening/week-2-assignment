console.log ("this is me testing that I have linked my JS to the HTML")
// Leaving this in my code for now, so I can see if anything breaks down the line.

const valueObjects = [
    { src: "https://images-assets.nasa.gov/image/PIA03606/PIA03606~large.jpg?w=1920&h=1920&fit=clip&crop=faces%2Cfocalpoint", alt: "Photo"},
    { src: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/CQFGZNVKCZJF7PROHV42QLV6JE.jpg", alt: "photo 2"},
];

console.log (valueObjects.length);


//TODO: I want to create my thumbnail images
//STEP 1: Select the DOM element we are manipulating
//I need to select both the thumbnail container and the large image container
document.getElementById("Thumbnails-Container");
console.log;
document.getElementById("Fullsizedimg-Container");
console.log;
//Since creating the thumbnail images takes more than one step, what is the best way to write a block of code? A function!
//I want to resuse this function for all my images --> I need parameters
function generatethumbnails() {
    // line 23 is going to look inside 'valueObjects' array -> perform the following function FOREACH of the objects found in the array. Also, for the following objects in the array, they will be reffered to as 'currentObject'. For object it finds in the array, it will refer to that object as 'currentObject' from now on. the newly generated image doesn't have a scr or alt yet.
    valueObjects.forEach(function(currentObject){
    let generatedImage = document.createElement("img");
    // lines 26 27 are setting the src and alt for our newly generated image element. They are matching the value of the src and alt of the object that the FOREACH loop is looking at, at the time. The reason that we refer to the src and alt of the array object as image.src and image.alt is because we told the function that we would refer to these objects as image.
    generatedImage.src = currentObject.src;
    generatedImage.alt = currentObject.alt;
}
        // 
    };
    // Below is my image source loop. Joe very kindly introduced me to the 'forEach' loop to use instead.
//     let generatedImage = document.createElement("img");
//     generatedImage.src = "";
//     generatedImage.alt = "";
// for (let i = 0; i =< images.length; i++);

}


    //I need to create more than one thumbnail --> I can use a loop
    //You can use different ways to loop thorugh your array: for loop / forEach()
    //Inside the loop, we have a few steps to do:
    //create an image element
    //we need assign values to the image element properties
    //src = value
    //we also need to assign a value to the className property
    //we need add an event to the image elements we are creating here
    //we need to append the images to the thumbnail container
  }
  createThumbnails(images);
  
  //!commit your work!
  
  //TODO: I want to create my larger images
  //The larger images will be created when the user triggers the thumbnail images event
  //This function will be event handler for our images
  function createLargeImagesHandler(largeImage) {
    //I want to remove the image that's in the full screen, and create a new image with new properties
    // largeImageContainer.innerHTML = null / ""
    //create an image element
    //assign values to the image element
    //add a className to style the large image
    //append the image to the largeImageContainer
  }
  //!we don't call the createLargeImagesHandler in here. It is an event handler!
  
  //!commit your work!