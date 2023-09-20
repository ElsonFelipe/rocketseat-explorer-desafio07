// variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const btnReset = document.querySelector("#btnReset")

// Eventos
fortuneCookie.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', resetWithEnter)

// funcoes callback
function handleTryClick(event) {
  event.preventDefault() // nao faca o padrao
  toggleScreen()
}

function handleResetClick() {
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function resetWithEnter(e) {
    if(e.key == 'Enter'&& screen1.classList.contains('hide')) {
      handleResetClick()
    }
}