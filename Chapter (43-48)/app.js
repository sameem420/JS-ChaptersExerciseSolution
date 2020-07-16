// Task # 1
function showAlert() 
{
    alert("You clicked Me!");
}

function deleteRow(id)
{
    document.getElementById(id).remove();
}

function changeImage()
{
    document.getElementById("myImage").src = 'images/InfinixNote7-b.jpg';
}

function restoreImage() {
    document.getElementById("myImage").src = 'images/SamsungGalaxyA31-b.jpg';
}