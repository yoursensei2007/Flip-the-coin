/* 
*  Author: Your Sensei
* Instagram: https://www.instagram.com/your_sensei2007?igsh=NG5vNnRmYTRzbDk4
 */
let gameBox = document.querySelector('#gameBox');
let coin = document.querySelector('#coin');
let result = document.querySelector('#result');
let money = document.querySelector('.money');
let popUpBar = document.querySelector('#popUpBar');
let option = document.querySelector('#option');
let bet = document.querySelector('#bet');

let wallet = 1000;
let player = option.value;   

money.innerText = wallet;

/* Wallet limit */
bet.addEventListener("input", () => {
    let value = Number(bet.value);

    if(value < 1){
        bet.value = "";
        return;
    }
    if(value > wallet){
        bet.value = wallet;
    }
});

/* Head / Tail */
function playerInput(){
    player = option.value;
}

/* Main Game */
function startGame(type){

    /* Open bet popup */
    if(type === "bet"){
        popUpBar.style.display = "flex";
        popUpBar.classList.remove("popUpMenuClose");
        popUpBar.classList.add("popUpMenuOpen");
        gameBox.style.opacity = "0.3";
        return;
    }

    let betValue = Number(bet.value);

    /* Validation */
    if(betValue < 1 || betValue > wallet){
        result.innerText = "Invalid Bet Amount!";
        return;
    }

    /* Close popup */
    popUpBar.classList.remove("popUpMenuOpen");
    popUpBar.classList.add("popUpMenuClose");

    setTimeout(()=>{
        popUpBar.style.display = "none";
        gameBox.style.opacity = "1";
    },1000);

    /* Coin flip */
    coin.classList.remove("flipCoin");
    void coin.offsetWidth;
    coin.classList.add("flipCoin");

    let toss = Math.random() < 0.5 ? "head" : "tail";
    
    coin.innerHTML = toss;
    setTimeout(()=>{
        if(player === toss){
            wallet += betValue;
            result.innerText = "You Win!";
            result.className = "win";
        }
        else if(player == "none"){
            result.innerText = "Select Head or Tail!";
        }
        else{
            wallet -= betValue;
            result.innerText = "You Lose!";
            result.className = "lose";
        }

        money.innerText = wallet;
        bet.value = "";
    },2000);
}

/* 
*  Author: Your Sensei
 * Instagram: https://www.instagram.com/your_sensei2007?igsh=NG5vNnRmYTRzbDk4
 */
