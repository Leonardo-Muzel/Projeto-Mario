const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const modalFechada = document.querySelector('.fechar-modal');
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo)
});

modalFechada.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});