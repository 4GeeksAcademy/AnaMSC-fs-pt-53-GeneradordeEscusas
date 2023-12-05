/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let Who = ["The dog", "My grandma", "His turtle", "My bird"];
let Action = ["ate", "peed", "crushed", "broke"];
let What = ["my homework", "the keys", "the car"];
let hen = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuseGenerator(who, action, what, when) {
  var numwho = Math.floor(Math.random() * who.length);
  var numaction = Math.floor(Math.random() * action.length);
  var numwhat = Math.floor(Math.random() * what.length);
  var numwhen = Math.floor(Math.random() * when.length);

  return (
    who[numwho] +
    " " +
    action[numaction] +
    " " +
    what[numwhat] +
    " " +
    when[numwhen]
  );
}

function onLoad() {
  var excuse = document.getElementById("excuse");
  excuse.innerHTML = excuseGenerator(who, action, what, when);
}
window.onload = onLoad;
