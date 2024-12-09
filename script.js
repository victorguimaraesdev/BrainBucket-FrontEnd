const efeitoTrocaDeCor = document.getElementById("logar");
const efeitoTrocaDeCorEscrevase = document.getElementById("escrevase");
const efeitoTrocaDeCorLogo = document.getElementById("imagem");
const efeitoTrocaDeCorBox = document.getElementsByClassName("box2");

efeitoTrocaDeCor.addEventListener("mouseover", () => {
    efeitoTrocaDeCor.style.color = "#ffffff";
    efeitoTrocaDeCor.style.border = "2px solid #ffffff";
});

efeitoTrocaDeCor.addEventListener("mouseout", () => {
    efeitoTrocaDeCor.style.color = "#c7c7c7";
    efeitoTrocaDeCor.style.border = "2px solid #5c5b5b";
});

efeitoTrocaDeCorEscrevase.addEventListener("mouseover", () => {
    efeitoTrocaDeCorEscrevase.style.color = "#ffffff";
});

efeitoTrocaDeCorEscrevase.addEventListener("mouseout", () => {
    efeitoTrocaDeCorEscrevase.style.color = "#c7c7c7";
});

efeitoTrocaDeCorLogo.addEventListener("mouseover", () => {
    efeitoTrocaDeCorLogo.style.filter = "brightness(0.5)";
    efeitoTrocaDeCorLogo.style.cursor = "pointer";
});

efeitoTrocaDeCorLogo.addEventListener("mouseout", () => {
    efeitoTrocaDeCorLogo.style.filter = "none";
});



for (let i = 0; i < efeitoTrocaDeCorBox.length; i++) {

    const box = efeitoTrocaDeCorBox[i];

    box.addEventListener("mouseover", () => {
        box.style.border = "2px solid #ffffff";
    });

    box.addEventListener("mouseout", () => {
        box.style.border = "2px solid #5c5b5b";
    });
}
