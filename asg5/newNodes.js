
var obj = document.getElementById("bt1");
obj.addEventListener("click", addNode);

function addNode(){

    var node = document.createElement("li");
    var textnode = document.createTextNode("Products");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    let node2 = document.createElement("li");
    let textnode2 = document.createTextNode("About");
    node2.appendChild(textnode2);
    document.getElementById("myList").appendChild(node2);

let listItems = document.querySelectorAll('li');


let i;

for (i = 1; i < listItems.length; i++) {
  listItems[i].className = 'color';
}}
