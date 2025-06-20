const bullet = document.getElementById("bullet");
const flash = document.getElementById("flash");

document.addEventListener("click", () => {
  // White flash
  flash.style.opacity = "1";
  setTimeout(() => flash.style.opacity = "0", 100);

  // Animate bullet
  bullet.style.display = "block";
  bullet.style.transition = "transform 0.3s linear";
  bullet.style.transform = "translateX(300px)";
  
  // Reset after animation
  setTimeout(() => {
    bullet.style.display = "none";
    bullet.style.transform = "translateX(0)";
  }, 300);
});
