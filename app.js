let userScore = 0;
let compScore = 0;

const choises = document.querySelectorAll(".icon");
const msg = document.querySelector("#msg");
const userScoreUp= document.querySelector("#userScore");
const compScoreUp = document.querySelector("#compScore");

choises.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        let userChoise = icon.getAttribute("id")
        playGmae(userChoise);
    });
});

const genCopmChoise = () =>{
    const copmChoise = ["rock","scissor","paper"];
    const compChoiseIdx = Math.floor(Math.random()*3);
    return copmChoise[compChoiseIdx];
};

const showWinner = (userWin) =>{
    if(userWin){
        console.log("You Win");
        msg.innerText= "You Win";
        userScore++;
        userScoreUp.innerText = userScore;

    }
    else{
        console.log("You Lose");
        msg.innerHTML= "You Lose";
        compScore++;
        compScoreUp.innerText= compScore;
    }

}

const drawGame = ()=>{
    console.log("Game is Draw");
    msg.innerText= "Game Is Draw";
}

const playGmae = (userChoise) =>{
    console.log("user Choise is",userChoise);
    const compChoise=genCopmChoise();
    console.log("computer choise is",compChoise);

    if(userChoise===compChoise){
        drawGame();
    }

    else{
        let userWin=true;
        if(userChoise==="rock"){
            userWin= compChoise==="paper" ? false:true;
        }

        else if(userChoise==="paper"){
            userWin= compChoise==="scissor" ? false:true;
        }

        else{
            userWin= compChoise==="rock" ? false:true;
        }

        showWinner(userWin);
    }

    
};

