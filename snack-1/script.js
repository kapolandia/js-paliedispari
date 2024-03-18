

function playGame(){
    let userNumberString = document.getElementById("user-number").value;
    let userNumber = parseInt(userNumberString);
    console.log(userNumber);
    if (userNumber > 5 || userNumber  < 1) {
        alert('Inserisci un numero valido');
    } else {
        let computerNumber = Math.floor(Math.random() * 5) + 1;
        console.log(computerNumber);
        let sum = userNumber + computerNumber;
        let userChoice = document.getElementById("inputGroupSelect01").value;
        let result = document.getElementById("result");
        
        if(sum % 2 === 0 && userChoice === "1"){
            result.innerHTML = "Hai vinto!"
        } else if (sum % 2 !== 0 && userChoice === "2"){
            result.innerHTML = "Hai vinto!"
        } else {
            result.innerHTML = "Hai perso!"
        }
    }
}
