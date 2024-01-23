// let input = document.getElementById("degg").value;

// let result = document.getElementsByClassName("ress");


// var card = document.getElementById("tyy").value; 

// function ans(){
//     if (card.options[card.selectedIndex].value == 'Fahrenheit') {
//         result.value = (input - 32) * 5/9; 

//     }else if(card.options[card.selectedIndex].value == 'Degree Celsius'){
//         result.value = (input * 9/5) + 32; 
//     }    

// }


function ans() {
    let input = document.getElementById("degg");
    let result = document.querySelector(".ress"); // Assuming there is only one element with the class "ress"
    let card = document.getElementById("tyy");

    if (card.value === 'Fahrenheit') {
        result.value = ((input.value - 32) * 5/9).toFixed(2) + `°C`;
    } else if (card.value === 'Degree Celsius') {
        result.value = (input.value * 9/5) + 32 + `F`;
    }else{
        result.value = (input.value - 273.15) + `K`;
    }
}












