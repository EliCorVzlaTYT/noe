onload = () => {
  document.body.classList.remove("container");
};


window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".falling-names");
  if (container) {
    function createName() {
      const span = document.createElement("span");
      span.textContent = "Noe";
      span.style.left = Math.random() * 100 + "vw";
      span.style.top = -10 + Math.random() * 10 + "vh"; // aparecen desde arriba pero con variación
      span.style.fontSize = (1.5 + Math.random() * 2.5) + "rem";
      span.style.animationDuration = 5 + Math.random() * 7 + "s";
      container.appendChild(span);
      setTimeout(() => span.remove(), 15000);
    }
    // Crear nombres continuamente y en cantidad
    setInterval(() => {
      for (let i = 0; i < 5; i++) createName();
    }, 800);
    // Llenar inicialmente con muchos
    for (let i = 0; i < 40; i++) createName();
  }
});
