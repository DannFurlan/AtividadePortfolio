const rodape = document.querySelector("footer p");

if (rodape) {
    const ano = new Date().getFullYear();
    rodape.textContent = "© " + ano + " by Daniel Colly Furlan";
}

const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
const links = document.querySelectorAll("nav a");

links.forEach(function (link) {
    if (link.getAttribute("href") === paginaAtual) {
        link.classList.add("Ativo");
    }
});

const botaoCopiar = document.querySelector("#copiar");

if (botaoCopiar) {
    botaoCopiar.addEventListener("click", function () {
        navigator.clipboard.writeText("danielfurlan.tech@gmail.com");
        botaoCopiar.textContent = "E-mail copiado!";

        setTimeout(function () {
            botaoCopiar.textContent = "Copiar e-mail";
        }, 2000);
    });
}