// Array 
let historialCalculos = [];

function calcular() {
    // Datos de entrada
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    // Verificar entradas 
    if (isNaN(numero1) || isNaN(numero2)) {
        mostrarResultado("<p>Por favor ingrese ambos números.</p>");
        return;
    }

    // Cálculos
    let resultados = {
        id: historialCalculos.length + 1,
        suma: numero1 + numero2,
        resta: numero1 - numero2,
        multiplicacion: numero1 * numero2,
        division: numero2 !== 0 ? (numero1 / numero2) : "Indefinido",
        usuario: "UsuarioDemo" // Puedes reemplazar esto con un nombre real si es necesario
    };

    // Agregar al historial
    historialCalculos.push(resultados);

    // Mostrar resultados 
    let resultadoHTML = `
        <p><strong>Resultados del cálculo #${resultados.id}:</strong></p>
        <p>Suma: ${resultados.suma}</p>
        <p>Resta: ${resultados.resta}</p>
        <p>Multiplicación: ${resultados.multiplicacion}</p>
        <p>División: ${resultados.division}</p>
    `;

    mostrarResultado(resultadoHTML);
}

// Mostrar el resultado en la página
function mostrarResultado(mensaje) {
    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("resultado").style.display = "block";
}
