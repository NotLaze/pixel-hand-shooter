const flash = document.getElementById("flash");
const ammoContainer = document.getElementById("ammoContainer");
const gun = document.getElementById("gun");

document.addEventListener("click", () => {
  // White flash
  flash.style.opacity = "1";
  setTimeout(() => flash.style.opacity = "0", 100);

  // Create bullet
  const bullet = document.createElement("div");
  bullet.classList.add("bullet");

  // Position bullet above barrel
  const gunRect = gun.getBoundingClientRect();
  bullet.style.left = `${gunRect.left + gunRect.width / 2 - 2}px`;
  bullet.style.top = `${gunRect.top}px`;

  ammoContainer.appendChild(bullet);

  // Remove bullet after animation
  bullet.addEventListener("animationend", () => bullet.remove());
});
