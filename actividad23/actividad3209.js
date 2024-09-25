function horizontal() {
    let tamanio = document.getElementById('tamanioHInput').value;
    tamanio = parseInt(tamanio);
    if (isNaN(tamanio) || tamanio < 0) {
        document.getElementById('resultado').innerText = "Por favor, ingresa un número válido.";
        return;
    }
    let linea = "";
    for (let i = 0; i < tamanio; i++) {
        linea += "*";
    }
    document.getElementById('resultado').innerText = linea;
}

function vertical() {
    let tamanio = document.getElementById('tamanioVInput').value;
    tamanio = parseInt(tamanio);
    if (isNaN(tamanio) || tamanio < 0) {
        document.getElementById('resultado2').innerText = "Por favor, ingresa un número válido.";
        return;
    }
    let linea = "";
    for (let i = 0; i < tamanio; i++) {
        linea += "*\n"; 
    }
    document.getElementById('resultado2').innerHTML = linea.replace(/\n/g, "<br>");
}

function diagonal(){
    let tamanio = document.getElementById('tamanioDInput').value;
    tamanio = parseInt(tamanio);
    if (isNaN(tamanio) || tamanio < 0) {
        document.getElementById('resultado3').innerText = "Por favor, ingresa un número válido.";
        return;
    }
    let linea = "";
    for (let i = 0; i < tamanio; i++) {
        for(let k = 0; k < tamanio; k++){
            if (k == i){
                linea += "*"
            }else{
                linea += "&nbsp;"
            }
        }
        linea += "\n"
    }
    document.getElementById('resultado3').innerHTML = linea.replace(/\n/g, "<br>");
}

function cuadrado(){
    let tamanio = document.getElementById('tamanioCInput').value;
    tamanio = parseInt(tamanio);
    if (isNaN(tamanio) || tamanio < 0) {
        document.getElementById('resultado4').innerText = "Por favor, ingresa un número válido.";
        return;
    }
    let linea = "";
    for (let i = 0; i < tamanio; i++) {
        for(let k = 0; k < tamanio; k++){
            if(i == 0){
                linea += "*"
            }else if((i+1) == tamanio){
                linea += "*"
            }else{
                if(k == 0){
                    linea += "*"
                }else if (k+1 == tamanio){
                    linea += "*"
                }else{
                    linea += "_"
                }
            }
        }
        linea += "\n"
    }
    document.getElementById('resultado4').innerHTML = linea.replace(/\n/g, "<br>");
}

document.getElementById('enviar').addEventListener('click', horizontal);
document.getElementById('enviar2').addEventListener('click', vertical);
document.getElementById('enviar3').addEventListener('click', diagonal);
document.getElementById('enviar4').addEventListener('click', cuadrado);


