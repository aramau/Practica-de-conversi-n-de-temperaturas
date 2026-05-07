const btnIniciar = document.getElementById('btnIniciar');
const contenedorResultados = document.getElementById('resultados');
const resKelvin = document.getElementById('resKelvin');
const resFahrenheit = document.getElementById('resFahrenheit');


//Función que sirve para solicitar y validar los datos
function realizarConversion() {
    let input;
    let celsius;

    while (true) { 
        input = prompt("Por favor, ingresa la temperatura en grados Celsius:");

        if (input === null) return;  // Revisa si el usuario canceló el prompt

        celsius = Number(input);  // Convierte a número

        if (!isNaN(celsius) && input.trim() !== "") {
            break; // Para salir del bucle si es válido
        } else {
            alert("¡Error! Por favor, ingresa un valor numérico.");
        }
    }

    // FORMULAS:
    const fahrenheit = (celsius * 1.8) + 32;
    const kelvin = celsius + 273.15;

    // Para mostrar resultados en el DOM
    resKelvin.textContent = `Grados Kelvin: ${kelvin.toFixed(2)}`;
    resFahrenheit.textContent = `Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;
    
    // Para que se vean los resultados, quitamos la clase d-none
    contenedorResultados.classList.remove('d-none');

    // Imprimir en consola los resultados
    console.log(`Entrada: ${celsius}`);
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
}

btnIniciar.addEventListener('click', realizarConversion); // Evento de clic