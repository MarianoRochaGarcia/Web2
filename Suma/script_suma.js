function sumar() {
    // Obtiene los valores ingresados en los inputs y los convierte a números
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    
    // Calcula la suma de los dos números
    const resultado = numero1 + numero2;
    
    // Muestra el resultado en el elemento con id "resultado"
    document.getElementById('resultado').textContent = resultado;
}
