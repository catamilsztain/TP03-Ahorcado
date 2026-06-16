// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let intentos = 10;
let palabraOculta = "";

let palabra = document.getElementById("ocultis").value;

for(let i = 0; i < palabra.length; i++)
{
    palabraOculta += "_";
}

function ArriesgarLetra()
{
    let letra = document.getElementById("letra").value.toUpperCase();
    let palabra = document.getElementById("ocultis").value;
    let nuevaPalabra = "";

    if(intentos > 0){
        for(let i = 0; i < palabra.length; i++)
    {
        if(palabra[i] == letra || palabraOculta[i] != "_")
        {
            nuevaPalabra += palabra[i];
            intentos = intentos + 1;
        }
        else
        {
            nuevaPalabra += "_";
        }
    }
    }
    else{
        mensaje.innerHTML= "no tenes más intentos bobi";
    }
    
    intentos = intentos -1;
    intento.innerHTML = intentos; 
    
    palabraOculta = nuevaPalabra;

    document.getElementById("mostrar").innerHTML = palabraOculta;
}

document.getElementById("mostrar").innerHTML = palabraOculta;
