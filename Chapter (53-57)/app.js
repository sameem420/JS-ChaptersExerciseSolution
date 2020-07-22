// Task # 1
// var modal = document.getElementById('myModal');
// var modalImg = document.getElementById("modal-img");

// var mB = document.getElementById("Mainbody");

// var pictures = [
//     'images/3.jpg',
//     'images/4.png',
//     'images/5.jpg',
//     'images/6.jpg'
// ];


// for (let i = 0; i < pictures.length; i++) {
//     // modal.innerHTML += "<img src='" + pictures[i] + "' class=test>";
//     mB.innerHTML += "<img src='" + pictures[i] + "' class=test>";
// }

// var mimg = document.getElementsByClassName("test");
// var images = document.querySelectorAll(".test");

// for(let i = 0; i < pictures.length; i++){
    
//     var img = pictures[i];
//     console.log(img);
//   // and attach our click listener for this image.
//     img.onclick = function(evt) {
//       modal.style.display = "block";
//       modalImg.src = this.src;
//       console.log(modalImg)
//     }
//   }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//     modal.style.display = "none";
// }




var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

