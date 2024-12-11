const efeitoTrocaDeCor = document.getElementById("logar");
const efeitoTrocaDeCorEscrevase = document.getElementById("escrevase");
const efeitoTrocaDeCorLogo = document.getElementById("imagem");
const efeitoTrocaDeCorBox = document.getElementsByClassName("box2");
const efeitoTrocaDeCorRegistrar = document.getElementById("registrar");
const efeitoTrocaDeCorRetornar = document.getElementById("voltarRegistro");

efeitoTrocaDeCor.addEventListener("mouseover", () => {
    efeitoTrocaDeCor.style.color = "#ffffff"
    efeitoTrocaDeCor.style.border = "2px solid #ffffff";
});

efeitoTrocaDeCor.addEventListener("mouseout", () => {
    efeitoTrocaDeCor.style.color = "#c7c7c7"
    efeitoTrocaDeCor.style.border = "2px solid #5c5b5b"
});

efeitoTrocaDeCorEscrevase.addEventListener("mouseover", () => {
    efeitoTrocaDeCorEscrevase.style.color = "#ffffff"
});

efeitoTrocaDeCorEscrevase.addEventListener("mouseout", () => {
    efeitoTrocaDeCorEscrevase.style.color = "#c7c7c7"
});

efeitoTrocaDeCorLogo.addEventListener("mouseover", () => {
    efeitoTrocaDeCorLogo.style.filter = "brightness(0.5)"
    efeitoTrocaDeCorLogo.style.cursor = "pointer"
});

efeitoTrocaDeCorLogo.addEventListener("mouseout", () => {
    efeitoTrocaDeCorLogo.style.filter = "none"
});
efeitoTrocaDeCorRegistrar.addEventListener("mouseover", () => {
    efeitoTrocaDeCorRegistrar.style.color = "#ffffff"
    efeitoTrocaDeCorRegistrar.style.border = "2px solid #ffffff";
});
efeitoTrocaDeCorRegistrar.addEventListener("mouseout", () => {
    efeitoTrocaDeCorRegistrar.style.color = "#c7c7c7"
    efeitoTrocaDeCorRegistrar.style.border = "2px solid #5c5b5b";
});
efeitoTrocaDeCorRetornar.addEventListener("mouseover", () => {
    efeitoTrocaDeCorRetornar.style.color = "#ffff"
    efeitoTrocaDeCorRetornar.style.cursor = "pointer"
})
efeitoTrocaDeCorRetornar.addEventListener("mouseout", () => {
    efeitoTrocaDeCorRetornar.style.color = "#c7c7c7"
    efeitoTrocaDeCorRetornar.style.cursor = "pointer"
})


for (let i = 0; i < efeitoTrocaDeCorBox.length; i++) {
    const box = efeitoTrocaDeCorBox[i];

    box.addEventListener("mouseover", () => {
        box.style.border = "2px solid #ffffff";
    });

    box.addEventListener("mouseout", () => {
        box.style.border = "2px solid #5c5b5b";
    });
}

const linkRegistreSe = document.getElementById("escrevase");
const flipCardInner = document.querySelector(".flip-card-inner");

linkRegistreSe.addEventListener("click", function (e) {
    e.preventDefault();
    flipCardInner.classList.add("flipado");
});
const linkRetornar = document.getElementById("voltarRegistro")

linkRetornar.addEventListener("click", () => {
    flipCardInner.classList.remove("flipado");
});

const logarButton = document.getElementById("logar");
const flipMaster = document.querySelector(".flipMaster");

logarButton.addEventListener("click", (e) => {
    e.preventDefault()
    flipMaster.style.opacity = "0"
}); //oloco bixo!