//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const alertError = document.querySelector(".alertError")
let xAttempts = 1;

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', resetByEnter)

//funcoes callback

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) >= 1 && Number(inputNumber.value) <= 10) {
        if (Number(inputNumber.value) == randomNumber) {
            toggleScreen()
            screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
        }
        xAttempts++
        alertError.classList.add("hide")
    } else {
        alertError.classList.remove("hide")
    }

        inputNumber.value = ""
}

function handleResetClick(event) {
    toggleScreen()
    xAttempts == 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function resetByEnter(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}
