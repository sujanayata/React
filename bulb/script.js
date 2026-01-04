const bulb = document.getElementById("bulb");
const onBtn = document.getElementById("onBtn");
const offBtn = document.getElementById("offBtn");

function bulbOn() {
  bulb.src = "bulb2.png";
  bulb.classList.add("glow");
  onBtn.classList.add("active");
  offBtn.classList.remove("active");
}

function bulbOff() {
  bulb.src = "bulb1.webp";
  bulb.classList.remove("glow");
  offBtn.classList.add("active");
  onBtn.classList.remove("active");
}
