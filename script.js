let secretNumber = Math.floor(Math.random()*11)
let attemptsNumber = 3
let numberTry = ''
console.log(secretNumber)

const modalOverlay = document.querySelector('.modalOverlay')
const modalContent = document.querySelector('#modalContent')

function modalCorrect() {
    modalOverlay.classList.add('active')
    modalContent.innerHTML =`
        <div class="modal" >
            <div  id="modalContent">
                <div class="images">
                    <img src="assets/correct.png" alt="">
                    <img src="assets/trophy.png" alt="">
                </div>
                <h1>Parabéns você acertou!</h1>
            </div>
            <div class="closeModal">
                <span onclick="location.reload()"> JOGAR NOVAMENTE</span>
            </div>
        </div>
    `
}
function modalWrong(string) {
    modalOverlay.classList.add('active')
    modalContent.innerHTML =`
        <div class="modal" >
            <div  id="modalContent">
                <div class="images">
                    <img src="assets/wrong.png" alt="">
                </div>
                <h1 class="wrong">Voce errou, mas ainda possui ${attemptsNumber} tentativas.</h1>
                <p>Dica: o numero secreto é ${string} que ${numberTry}. </p>
            </div>
            <div class="closeModal">
                <span onclick="modalClose()">NOVA TENTATIVA</span>
            </div>
        </div>
    `
}
function modalGameOver() {
    modalOverlay.classList.add('active')
    modalContent.innerHTML =`
        <div class="modal" >
            <div  id="modalContent">
                <div class="images">
                    <img src="assets/wrong.png" alt="">
                </div>
                <h1 class="wrong">Voce errou, GAME OVER!</h1>
            </div>
            <div class="closeModal">
                <span onclick="location.reload()"> JOGAR NOVAMENTE</span>
            </div>
        </div>
    `
}
function modalClose() {
    modalOverlay.classList.remove('active')
}
function result () {
    numberTry = parseInt(document.getElementById('numberTry').value) || 0

    if(secretNumber == numberTry){
        return modalCorrect()
    } else if (numberTry > secretNumber) {
        attemptsNumber--
        if (attemptsNumber == 0) {
            return modalGameOver()
        }
        modalWrong('menor')
        document.getElementById('numberTry').value = ''
    } else if (numberTry < secretNumber) {
        attemptsNumber--
        if (attemptsNumber == 0) {
            return modalGameOver()
        }
        modalWrong('maior')
        document.getElementById('numberTry').value = ''
    } 
}



// for (let index = 1; index <= attemptsNumber; index++) {
//     numberTry = parseInt(prompt("Digite um numero entre 0 e 10")) || 0

//     if(secretNumber == numberTry){
//         alert('Acertou!!')
//         break
//     } else if (numberTry > secretNumber) {
//         console.log(`Você errou, o numero secreto é menor que ${numberTry}.`)
//         console.log(`Você terá mais ${3-index} tentativas`)
//     } else if (numberTry < secretNumber) {
//         console.log(`Você errou, o numero secreto é maior que ${numberTry}.`)
//         console.log(`Você terá mais ${3-index} tentativas`)
//     } 

//     if (index == 3) {
//         alert('Suas tentativas acabaram e você não conseguiu descobrir!')
//     }
// } 

