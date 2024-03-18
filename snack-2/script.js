function checkWord(){
    let userNumberString = document.getElementById("user-number").value;
    console.log(userNumberString);
    let reverseWord = "";
    let result = document.getElementById("result");
    if(userNumberString  == "" ){
        alert('Inserisci una parola valida');
    } else{
        for(let i = userNumberString.length-1; i >= 0 ; i--){
            reverseWord += userNumberString[i];
        }
        console.log(reverseWord);
        if(userNumberString.toLowerCase() ===  reverseWord.toLowerCase()){
            result.innerHTML = "Palindroma"
        } else{
            result.innerHTML = "Non palindroma";
        }
    }
}