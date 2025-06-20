const hand = document.getElementById("hand");
const flash = document.getElementById("flash");

document.addEventListener("click", () => {
  // Animate hand
  hand.style.transform = "scale(1.1)";
  setTimeout(() => {
    hand.style.transform = "scale(1)";
  }, 100);

  // Flash effect
  flash.style.opacity = "1";
  setTimeout(() => {
    flash.style.opacity = "0";
  }, 100);
});
