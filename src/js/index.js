


console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
console.log(linkDoVideo);

botaoTrailer.addEventListener("click", () =>{
  modal.classList.add("aberto"); 
  video.setAttribute("src", linkDoVideo);  
});

botaoFecharModal.addEventListener("click", () =>{
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});












