// Task # 1
var modal = document.getElementById('modal');
var modalImg = document.getElementById("modal-img");

var pictures = [
    'images/3.jpg',
    'images/4.png',
    'images/5.jpg',
    'images/6.jpg'
];


for (i = 0; i < pictures.length; i++) {
    modal.innerHTML += "<img src='"+pictures[i]+"'>";
    
}

    // modalImg.onclick = function(){
    // modal.style.display = "block";
    // modalImg.src = this.src;