
let div = document.querySelector("#div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let section = document.createElement("section");
let I = document.querySelector("i");
let icones = ["snowflake", "sun", "gem", "heart", "moon", "star", "snowflake", "sun", "gem", "heart", "moon", "star","circle","lemon","square","circle","lemon","square"];//,"map","flag","bell"];
let melange = shuffle(icones);
console.log(melange);
let tabclick = [];
let tabresult = [];
/**
 * Créer une variable tableau qui va stocker les éléments que tu click
 */



div.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(section);


div.classList.add("container");
div1.classList.add("row");
div2.classList.add("col-lg-12");
section.classList.add("section", "row");

function myCards() {

  for (var i = 0; i < 18; i++) {

    let article = document.createElement("article");
    let div3 = document.createElement("div");
    let I = document.createElement("i");

    I.style.display = "none";

    section.appendChild(div3);
    div3.appendChild(article);
    article.appendChild(I);

    article.addEventListener("click", function (event) {


      // 
      // 

      if (I.style.display !== "block") {

        console.log(tabclick.length);
        tabclick.push(I);
        if (tabclick.length <= 2) { //&& si tab.length < 2) {
          I.style.display = "block";
          console.log("ere");

          //match true
          matches(tabclick, tabresult);
        }
        else if (tabclick.length >= 2) {
          //tabclick[1].style.display = "none";
          for (let index = 0; index <= 2; index++) {
            tabclick[index].style.display = 'none';
            console.log(tabclick[index]);
          }
          tabclick = [];
          //tabclick.remove
          console.log("ee");
        }
        else {
          console.log("er");
          I.style.display = "none";

        }
      }

    })

    div3.classList.add("col-lg-2");
    article.classList.add("article" + i);
    I.classList.add("far", "fa-" + icones[i]);
    I.value = "far", "fa-" + icones[i];
  }

}
myCards();

function matches(tabclick, tabresult) {
  //if (tabclick[0].classList.contains(tabclick[1].classList)) {
  if (tabclick.length == 2) {
    if (tabclick[1] && tabclick[0].classList[1] == tabclick[1].classList[1]) {
      tabresult.push(tabclick[0], tabclick[1]);
      console.log(tabresult);
      //1- 
      tabclick.splice(0);
      console.log(tabclick);

      if (tabresult.length === 18) {
        alert("félicitation vous avez gagner!!"); 
      } 
    }
    else {

      setTimeout(function () {
        for (let index = 0; index < 2; index++) {
          tabclick[index].style.display = 'none';
        }
        tabclick.splice(0);


      }, 500);

      console.log("looser");
    }
  }
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}