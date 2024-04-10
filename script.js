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
    // si une ( est ouverte mais pas fermer, on la ferme
    let expression = document.getElementById('display').value
    // on regarde dans l'expression le nombre de () ouverte 
    let openParenthesis = (expression.match(/\(/g) || []).length;
    // on regarde des expressions le nombre de parenthèse fermée
    let closeParentheseis = (expression.match(/\(/g) || []).length;
    // on fait la diff entre les 2 
    let diff = openParenthesis - closeParentheseis;
    if (diff < 0) {
        for (let i = 0; i < diff; i++) {
            expression += ')';
        }
    }


    // si on a √ on remplace par Math.sqrt
    expression = expression.replace(/√/g, 'Math.sqrt');
    // si on a sin on remplace par Math.sin
    expression = expression.replace(/sin/g, 'Math.sin');
    // pareil pour les autres symboles 
    expression = expression.replace(/cos/g, 'Math.cos');
    expression = expression.replace(/tan/g, 'Math.tan');
    expression = expression.replace(/^/g, '**');
    expression = expression.replace(/π/g, 'Math.PI');


    // on affiche le result 

    try {
        let result = eval(expression);
        document.getElementById('display').value = result
    } catch (error) {
        document.getElementById('display').value = 'Erreur'
    }


}

// meth qui permet d'afficher la fonction de calcul
function appendFunction(func) {
    switch (func) {
        // case racine carré
        case "sqrt":
            document.getElementById('display').value += '√';
            break;
        case 'sin':
            document.getElementById('display').value += 'sin(';
            break;
        case 'tan':
            document.getElementById('display').value += 'tan(';
            break;
        case 'cos':
            document.getElementById('display').value += 'cos(';
            break;
        case 'exp':
            document.getElementById('display').value += '^';
            break;
        case 'mod':
            document.getElementById('display').value += '%';
            break;
        case 'pi':
            document.getElementById('display').value += 'π';
            break;

    }
}

// 
function eraseLastCaracter() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}