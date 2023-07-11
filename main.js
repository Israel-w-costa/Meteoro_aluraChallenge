const carroselImagens = document.querySelector (".carrosel_imagens");

function showSlide(index) {
    carroselImagens.style.transform = `translateX(-${index * 100}%)`;
    console.log (carroselImagens)
  }