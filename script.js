// fonction pour ajouter un element a l'ecran 

function appendToDisplay(value) {

    document.getElementById('display').value += value;
}

//fonction pour effacer l'écran
function clearDisplay() {
    document.getElementById('display').value = '';

}

//fonction pour calculer 
function calculate() {
    //dans une variable on stock la valeur de l'input 
    let expression = document.getElementById('display').value;

    let result = eval(expression);
    document.getElementById('display').value = result

}

