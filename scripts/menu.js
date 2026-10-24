const botao = document.querySelector(".mobileMenu");
const menu = document.querySelector(".menu");

botao.addEventListener("click", () => {
  const aberto = menu.classList.toggle("open");
  botao.setAttribute("aria-expanded", aberto);
});

// Fecha o menu ao clicar em um link
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    botao.setAttribute("aria-expanded", "false");
  });
});
