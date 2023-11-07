function Limpiar(id1, id2){
    document.getElementById(id1).value = "";
    document.getElementById(id2).value = "";
}
function Calcular(id1, id2){
    var operador = document.getElementById("operadores").options[document.getElementById("operadores").selectedIndex].value;
    
    let num1 = document.getElementById(id1).value;
    let num2 = document.getElementById(id2).value;
    let resultado = new Number();
    

    switch(operador)
    {
        case "+":
            resultado= num1 + num2
            let expresion = num1 + operador + num2;
            resultado = eval(expresion);
            break;
        case "-":
            resultado= num1 - num2
             expresion = num1 + operador + num2;
            resultado = eval(expresion);
            break;
        case "/":
        case "*":
            					
        default:
            break;				
        
    }	
}
