var button = document.querySelector("button");
var button1 = document.querySelector("#btn");
var body = document.querySelector("body");
var list = document.getElementById("list");
var ul = document.querySelector("ul");
var color = document.querySelector("#color");
var p = document.querySelector("p");

function mode()
{
    body.classList.toggle("black");
}

function addlist()
{
    if(list.value.length > 0){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(list.value));
     ul.appendChild(li);

     list.value = "";
    }
}

function addcolor()
{
    body.style.background = color.value;
}

function clickp()
{
    p.remove()
}

button.addEventListener("click", mode);
button1.addEventListener("click", addlist);
color.addEventListener("input", addcolor);
p.addEventListener("click", clickp)

