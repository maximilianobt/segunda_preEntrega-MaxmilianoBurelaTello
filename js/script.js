function calcular() {
    // Datos de entrada
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    // Verificador
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").innerHTML = "<p>Por favor ingrese ambos números.</p>";
        document.getElementById("resultado").style.display = "block";
        return;
    }

    // Declaración de variables 
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero2 !== 0 ? (numero1 / numero2) : "Indefinido";

    // Resultados
    let resultadoHTML = `
        <p><strong>Resultados:</strong></p>
        <p>Suma: ${suma}</p>
        <p>Resta: ${resta}</p>
        <p>Multiplicación: ${multiplicacion}</p>
        <p>División: ${division}</p>
    `;

    // Mostrar resultados 
    document.getElementById("resultado").innerHTML = resultadoHTML;
    document.getElementById("resultado").style.display = "block";
}
