
// .flip - card.flipado.flip - card - inner {
//     transform: rotateY(180deg);
// }
// <script>
//     const button = document.getElementById ("button")
//     button.onclick = function(){
//     	const flip = document.getElementById ("flip")
//     flip.classList.toggle("flipado")
//     }
// </script>
// </body >
// </html >
const efeitoTrocaDeCor = document.getElementById("logar")
const efeitoTrocaDeCorEscrevase = document.getElementById("escrevase")
const efeitoTrocaDeCorLogo = document.getElementById("imagem")

efeitoTrocaDeCor.addEventListener("mouseover", () => {
    efeitoTrocaDeCor.style.color = "#ffffff"
    efeitoTrocaDeCor.style.border = "2px solid #ffffff "
})

efeitoTrocaDeCor.addEventListener("mouseout", () => {
    efeitoTrocaDeCor.style.color = "#c7c7c7"
    efeitoTrocaDeCor.style.border = "2px solid #5c5b5b "
})
efeitoTrocaDeCorEscrevase.addEventListener("mouseover", () => {
    efeitoTrocaDeCorEscrevase.style.color = "#ffffff"
})
efeitoTrocaDeCorEscrevase.addEventListener("mouseout", () => {
    efeitoTrocaDeCorEscrevase.style.color = "#c7c7c7"
})
efeitoTrocaDeCorLogo.addEventListener("mouseover", () => {
    efeitoTrocaDeCorLogo.style.filter = "brightness(.5)"
    efeitoTrocaDeCorLogo.style.cursor = "pointer"
})
efeitoTrocaDeCorLogo.addEventListener("mouseout", () => {
    efeitoTrocaDeCorLogo.style.filter = "none"
})

