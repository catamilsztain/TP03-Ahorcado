// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let palabraOculta = document.getElementById("PalabraOculta").value;
const mostrar = document.getElementById("mostrar");
const resultado = document.getElementById("Resultado");
for (item in palabraOculta){
    mostrar.innerHTML += " _ ";
}

function ArriesgarLetra(){
    console.log(palabraOculta);
    let arriesgo = document.getElementById("Arriesgo").value;
    let intentos = 0;
    if(intentos < 10){
        for(item in palabraOculta){
            if(arriesgo == item){
                item.innerHTML = arriesgo;
            }
        }
    }
}

