var a = true;
setInterval("slidebar()", 3000);

function slidebar() {
  bkimg();
  slidetext();
}
function bkimg() {
  if (a === true) {
    document.getElementsByClassName("nav")[0].style.backgroundImage =
      "url('./images/hero_1.jpg')";
    a = false;
  } else {
    document.getElementsByClassName("nav")[0].style.backgroundImage =
      "url('./images/hero_2.jpg')";
    a = true;
  }
}
let b = true;
function slidetext() {
  if (b === true) {
    let div1 = document.createElement("div");
    let header = document.createElement("h1");
    header.className += "uppercase";
    let textnode = document.createTextNode("Expert Chefs");
    let paragraph = document.createElement("p");
    let textnode2 = document.createTextNode(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi undeimpedit, necessitatibus, soluta sit quam minima expedita atquecorrupti reiciendis."
    );
    header.appendChild(textnode);
    div1.appendChild(header);
    paragraph.appendChild(textnode2);
    div1.appendChild(paragraph);
    div1.id = "nav__div";
    document.getElementById("nav__div").replaceWith(div1);
    b = false;
  } else {
    let div2 = document.createElement("div");
    let header = document.createElement("h1");
    header.className += "uppercase";
    let textnode = document.createTextNode("Delecious Food");
    let paragraph = document.createElement("p");
    let textnode2 = document.createTextNode(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi undeimpedit, necessitatibus, soluta sit quam minima expedita atquecorrupti reiciendis."
    );
    header.appendChild(textnode);
    div2.appendChild(header);
    paragraph.appendChild(textnode2);
    div2.appendChild(paragraph);
    div2.id = "nav__div";
    document.getElementById("nav__div").replaceWith(div2);
    b = true;
  }
}
