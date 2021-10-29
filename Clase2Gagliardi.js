let primerNumero = prompt ("Ingrese un numero");
let segundoNumero = prompt ("Ingrese otro numero");

let suma = parseInt (primerNumero) + parseInt (segundoNumero);

if (suma >200){
    console.log ("Es mayor");
}

else if (suma < 200){
    console.log ("Es menor");
}

else{
    console.log ("Es igual");
}
