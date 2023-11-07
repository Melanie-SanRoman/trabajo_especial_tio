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
            break;
        case "-":
            resultado= num1 - num2
            break;
        case "/":
        case "*":
            					
        default:
            break;				
        
    }	

    document.getElementById("salida").innerHTML = "Resultado: "+ resultado;
}
