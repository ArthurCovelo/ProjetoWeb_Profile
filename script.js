function toggleMode() {
  const html = document.documentElement
  //Usando para adicionar ou remover a class chamado "light".
  html.classList.toggle("light")

  //Selecionando a imagem atraves pelo id
  const img = document.querySelector("#img img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/ArthurCovelo-Light.png")
  } else {
    img.setAttribute("src", "./assets/ArthurCovelo.png")
  }
}
