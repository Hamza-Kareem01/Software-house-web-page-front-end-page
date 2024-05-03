// for typing text:

let heading = document.querySelector("#header-heading");
let headingarray = heading.dataset.typetext.split("");

let counter = -1;

heading.innerHTML = "";

function typeJs() {
  if (counter < heading.dataset.typetext.length) {
    counter++;
    heading.innerHTML += heading.dataset.typetext.charAt(counter);
    heading.style.margin = "0px"
    headingarray = heading.dataset.typetext.split("");
  } else {
    headingarray.pop();
    heading.innerHTML = headingarray.join("");
    if (headingarray.length == 0) {
      counter = -1;
    }
  }
}

setInterval(() => {
  typeJs();
}, 200);


//for mouse over on div for text show

let maindiv = document.getElementById("internal-circle2");

let text = document.getElementById("first-text");
let text2 = document.getElementById("second-text");
let text3 = document.getElementById('third-text');

let div1 = document.getElementById("skyblue-div");
let div2 = document.getElementById("purple-div");
let div3 = document.getElementById("blue-div");

div1.addEventListener('mouseover', textshow1)
div1.addEventListener('mouseout', texthide1)
function textshow1() {
  text.style.visibility = 'visible';
  maindiv.style.visibility = 'visible';
}
function texthide1() {
  text.style.visibility = 'hidden';
  maindiv.style.visibility = 'hidden';
}


div2.addEventListener('mouseover', textshow2)
div2.addEventListener('mouseout', texthide2)
function textshow2() {
  text2.style.visibility = 'visible';
  maindiv.style.visibility = 'visible';
}
function texthide2() {
  text2.style.visibility = 'hidden';
  maindiv.style.visibility = 'hidden';
}

div3.addEventListener('mouseover', textshow3)
div3.addEventListener('mouseout', texthide3)
function textshow3() {
  text3.style.visibility = 'visible';
  maindiv.style.visibility = 'visible';
}
function texthide3() {
  text3.style.visibility = 'hidden';
  maindiv.style.visibility = 'hidden';
}







//for rotating icon:

var git = document.querySelector("#icons")
var icon = document.querySelector("#giticon")
git.addEventListener('onmouseover', (e) => {
  const gitRect = git.getBoundingClientRect();
  const centerX = gitRect.left + gitRect.width / 2;
  const rotateY = (e.clientX - centerX) / 10;

  git.style.transform = rotateY("${rotateY}deg");
});

git.addEventListener('onmouseleft', () => {
  git.style.transform = 'rotateY(0deg)';
});

