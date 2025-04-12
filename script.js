function randomNumber(){
    
    return Math.floor(Math.random() * 3) + 1;
}

function tieCase(result){
    console.log("Tie");
    result.innerHTML = "Tie";
}

function winCase(result){
    var point = document.getElementById("playerPoint");
    point.innerHTML++;
    result.innerHTML = "You Won";
}

function loseCase(result){
    var point = document.getElementById("computerPoint");
    point.innerHTML++;
    result.innerHTML = "You lost";
}

function clearResultText(){
    result.innerHTML = "";
}


function hideButton(){

    var nextButton = document.getElementById("nextGame");
    nextButton.style.visibility = "hidden";
}

function nextOne(){

    clearResultText();
    hideButton();

    var pRock = document.getElementById("rock");
    var pPaper = document.getElementById("paper");
    var pScissors = document.getElementById("scissors");
    var cRock = document.getElementById("cRock");
    var cPaper = document.getElementById("cPaper");
    var cScissors = document.getElementById("cScissors");

    var opMeasur = "100%";

    pRock.style.opacity = opMeasur;
    pPaper.style.opacity = opMeasur;
    pScissors.style.opacity = opMeasur;
    cRock.style.opacity = opMeasur;
    cPaper.style.opacity = opMeasur;
    cScissors.style.opacity = opMeasur;
}

function beforeShow(playerPick, computerPick){
    var pRock = document.getElementById("rock");
    var pPaper = document.getElementById("paper");
    var pScissors = document.getElementById("scissors");
    var cRock = document.getElementById("cRock");
    var cPaper = document.getElementById("cPaper");
    var cScissors = document.getElementById("cScissors");
    var countdownDiv = document.getElementById('countdown');
    countdownDiv.innerHTML = ''; // Töröld az előző számokat

    var opMeasur = "20%";

    var counts = ['Rock', 'Paper', 'Scissors'];
    counts.forEach(function (count, index) {
        var countElement = document.createElement('div');
        countElement.textContent = count;
        countElement.classList.add('count');
        countElement.style.animationDelay = index * 0.5 + 's'; // Számok közötti késleltetés
        countdownDiv.appendChild(countElement); // Adjuk hozzá a számokat a countdown div-hez
        countElement.classList.add('animate');
    });
    
    setTimeout(showPicks, 1700, playerPick, computerPick, pRock, pPaper, pScissors, cRock, cPaper, cScissors, opMeasur);

}

function showPicks(playerPick, computerPick, pRock, pPaper, pScissors, cRock, cPaper, cScissors, opMeasur){
    



    if (playerPick == 1) {
        
        pPaper.style.opacity = opMeasur;
        pScissors.style.opacity = opMeasur;

    }else if (playerPick == 2) {

        pRock.style.opacity = opMeasur;
        pScissors.style.opacity = opMeasur;
        
    }else{

        pPaper.style.opacity = opMeasur;
        pRock.style.opacity = opMeasur;

    }

    if (computerPick == 1) {

        cPaper.style.opacity = opMeasur;
        cScissors.style.opacity = opMeasur;
        
    }else if (computerPick == 2) {
        
        cRock.style.opacity = opMeasur;
        cScissors.style.opacity = opMeasur;
        
    }else{

        cPaper.style.opacity = opMeasur;
        cRock.style.opacity = opMeasur;

    }

    if (playerPick == computerPick) {
        tieCase(result); //noone gets point
    }else if((playerPick == 1 && computerPick == 3) || (playerPick == 2 && computerPick == 1) || (playerPick == 3 && computerPick == 2)){
        winCase(result); //player gets point
    }else{
        loseCase(result);
    }

}



function main(playerPick){
    var computerPick = randomNumber();
    var result = document.getElementById("result");
    


    beforeShow(playerPick,computerPick);
    // console.log("Player: " + playerPick + "Computer: " + computerPick);
    
    
    var nextButton = document.getElementById("nextGame");
    
    nextButton.style.visibility = "visible";
    
}
