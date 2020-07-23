// Task # 1
var mainContent = document.getElementById("main-content");
console.log(mainContent.childNodes);


var render = document.getElementsByClassName("render");

for (var i=0; i< render.length; i++)
{
    document.writeln(render[i].innerHTML);
}


var firstName = document.getElementById("first-name");
firstName.value = "Muhammad";

var lastName = document.getElementById("last-name");
lastName.value = "Sameem";

var email = document.getElementById("email");
email.value = "sameem@user.com";


var formContent = document.getElementById("form-content");
document.write("<br><br>" + formContent.nodeType);

document.write("<br><br>" + lastName.nodeType);
