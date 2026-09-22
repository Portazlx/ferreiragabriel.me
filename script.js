const botaoSurpresa = document.getElementById("botao-surpresa");
const botaoConfirmacao = document.getElementById("botao-confirmacao");

if (botaoSurpresa && botaoConfirmacao) {
  botaoSurpresa.addEventListener("click", function () {
    botaoSurpresa.style.display = "none";
    botaoConfirmacao.classList.add("mostrar-confirmacao");
  });

  botaoConfirmacao.addEventListener("click", function () {
    window.open("parabens.html", "_blank");
  });
}

const areaConfetes = document.getElementById("confetes");

if (areaConfetes) {
  const cores = [
    "#ff1744",
    "#ffea00",
    "#00e676",
    "#2979ff",
    "#d500f9",
    "#ff9100",
    "#00e5ff"
  ];

  for (let i = 0; i < 160; i++) {
    const confete = document.createElement("span");

    confete.classList.add("confete");
    confete.style.left = `${Math.random() * 100}%`;
    confete.style.backgroundColor =
      cores[Math.floor(Math.random() * cores.length)];
    confete.style.animationDuration = `${3 + Math.random() * 5}s`;
    confete.style.animationDelay = `${Math.random() * 5}s`;
    confete.style.transform = `rotate(${Math.random() * 360}deg)`;
    confete.style.width = `${7 + Math.random() * 10}px`;
    confete.style.height = `${12 + Math.random() * 18}px`;

    areaConfetes.appendChild(confete);
  }
}