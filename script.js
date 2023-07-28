function toggleMode() {
  const html = document.documentElement
  //Usando para adicionar ou remover a class chamado "light".
  html.classList.toggle("light")

  //Selecionando a imagem atraves pelo id
  const img = document.querySelector("#img img")

  if (html.classList.contains("light")) {
    // Mudar para o modo light
    img.style.opacity = "0" // Aplica o fade-out na imagem
    setTimeout(() => {
      img.setAttribute("src", "./assets/arthurcovelo-light.png")
      img.style.opacity = "1"
    }, 400)
  } else {
    img.style.opacity = "0"
    setTimeout(() => {
      img.setAttribute("src", "./assets/arthurcovelo.png")
      img.style.opacity = "1"
    }, 400)
  }
}
