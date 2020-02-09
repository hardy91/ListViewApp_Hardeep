

function btnClick(){
console.log("in ");
var ul = document.getElementById("list");
var li  = document.createElement("LI");
var input = document.getElementById("input");
console.log(input);
li.innerHTML = document.getElementById("input").value;
console.log(document.getElementById("input").innerHTML)
console.log(li.innerHTML);
ul.appendChild(li);
}