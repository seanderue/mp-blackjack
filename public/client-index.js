let socket = io()

function startGame(){
    console.log("loser")
}

function newGame() {
    console.log("winner")
}

let form = document.getElementById('name-form')
let input = document.getElementById('name-input')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value) {
        socket.emit('nameSubmit', input.value)
    }
})