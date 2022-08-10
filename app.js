const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const resetBtn = document.getElementById('button3')
var playerOneNum = 0
var playerTwoNum = 0
var selectedGame = document.getElementById('gameTypes')
let h2 = document.querySelector('h2')
var selectedGameNum = selectedGame.value
let isGameOver = false;
selectedGame.addEventListener('change', function(){
    selectedGameNum = selectedGame.value
    reset()
})
button1.addEventListener('click', function button1Func(){
    if (isGameOver === false){
        playerOneNum = playerOneNum + 1
        h2.innerText = `${playerOneNum} to ${playerTwoNum}` 
        if(parseInt(playerOneNum) == parseInt(selectedGameNum)){
            h2.innerText = `PLAYER ONE WINS ${playerOneNum} to ${playerTwoNum}!`
            isGameOver = true
            
        }
        
    }
    else if(isGameOver === true){
        alert('GAME IS ALREADY OVER, HIT RESET!!! Idiot...')
    }
})

button2.addEventListener('click', function button2Func(){
    if (isGameOver === false){
        playerTwoNum = playerTwoNum + 1
        h2.innerText = `${playerOneNum} to ${playerTwoNum}`
        if(parseInt(playerTwoNum) == parseInt(selectedGameNum)){
            h2.innerText = `Player TWO WINS ${playerTwoNum} to ${playerOneNum}!`;
            isGameOver = true
            
        }
    }
    else if(isGameOver === true){
        alert('GAME IS ALREADY OVER, HIT RESET!!! Idiot...')
    }


    

})
function reset() {
    isGameOver = false;
    playerOneNum = 0;
    playerTwoNum = 0;
    h2.innerText = '0 to 0'


}
resetBtn.addEventListener('click', reset)
