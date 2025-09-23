const tid = new Date().getHours();

if (tid < 5) {
  console.log("Godnat");
} else if (tid < 10) {
  console.log("Godmorgen");
} else if (tid < 18) {
  console.log("Goddag");
} else {
  console.log("Godaften");
}

document.querySelector("button").addEventListener("click", count);
let point = 0;

function count() {
  point++;
  document.querySelector("h1").textContent = point;
}
